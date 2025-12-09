import { useLocation, useNavigate, useParams } from 'react-router';
import { useGetRepairRequestByIdLazyQuery, type Repair_Request_With_LogsFragment, type Repair_RequestFragment, type Requests_Logs, useUpsertRepairRequestLogMutation, type Requests_Logs_Insert_Input, useDeleteRepairRequestLogMutation, type DeleteRepairRequestLogMutation, useGetVehicleByIdQuery, useGetVehicleByIdLazyQuery, useCreateRepairRequestMutation, useUpdateRepairRequestMutation, type Repair_Requests_Insert_Input, type Repair_Requests_Set_Input, useGetAutoMechanicsLazyQuery, useGetAutoMechanicsQuery, type UserFragment, type Users, type GetAutoMechanicsQuery } from '../../../../graphql/generated';
import Log, { type COMMENT_ACTIONS } from './Log';
import { isNullOrUndefined } from 'is-what';
import DetailsHeader from '../common/forms/DetailsHeader';
import DatasourceEmptyResult from '../common/tables/DataSourceEmptyResult';
import UserContext from '../providers/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography, styled } from '@mui/material';
import type { FormControlError } from '../common/interfaces';
import AddCommentIcon from '@mui/icons-material/AddComment';
import type { FetchResult } from '@apollo/client';
import { PathSegments } from '../../../routes/enums';
import { useSnackbar } from '../providers/SnackbarContext';
import { buildUrl } from '../../../routes/routes-util';
import useEnums from '../hooks/useEnums';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//#region Form Types 
const omitRepairRequestProperties = ['id', 'created_at', 'updated_at', 'logsCount', 'vehicle', 'vehicle_status'] as const;
type FilteredProperties = Pick<Repair_RequestFragment, typeof omitRepairRequestProperties[number]>;
type FormRepairRequestProps = Omit<Repair_RequestFragment, keyof FilteredProperties> & { logsCount: number; status: string; };
//#endregion Form Types 

const MyInputLabel = styled(InputLabel)(() => ({
    backgroundColor: 'white',
    paddingRight: '8px'
}));

export default function RepairRequestDetails() {
    const navigate = useNavigate();
    let { id } = useParams<{ id: string; }>();
    let { vehicleId } = useParams<{ vehicleId: string; }>();

    // utils and variables
    const { userSettings } = useContext(UserContext);
    const { showSnackbar } = useSnackbar();
    const { vehicleStatuses } = useEnums();
    const isCreateMode = isNullOrUndefined(id) || !isNullOrUndefined(vehicleId);  // update request OR create one for a vehicle 
    const location = useLocation();

    // GraphQL hooks
    const [getVehicleById, { data: vehicleData }] = useGetVehicleByIdLazyQuery();
    const [getRepairRequest] = useGetRepairRequestByIdLazyQuery();
    const [createRepairRequest] = useCreateRepairRequestMutation();
    const [updateRepairRequest] = useUpdateRepairRequestMutation();
    const [upsertLog] = useUpsertRepairRequestLogMutation();
    const [deleteLog] = useDeleteRepairRequestLogMutation();
    const [getAutoMechanics] = useGetAutoMechanicsLazyQuery();

    // State variables
    const [repairRequest, setRepairRequest] = useState<Repair_Request_With_LogsFragment>();
    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [isLogsDisabled, setIsLogsDisabled] = useState<boolean>(false);
    const [isAddLogEnabled, setIsAddLogEnabled] = useState<boolean>(false);
    const [isLogsVisible, setIsLogsVisible] = useState<boolean>(true);
    const [isButtonAddLogVisible, setIsButtonAddLogVisible] = useState<boolean>(true);
    const [refresh, setRefresh] = useState(true);
    const [errors/*, setErrors*/] = useState<FormControlError[]>([]);

    const [value, setValue] = useState<Dayjs | null>(dayjs()
    );

    const [mechanics, setMechanics] = useState<UserFragment[]>([]);
    const [formData, setFormData] = useState<FormRepairRequestProps>({
        title: '',
        description: '',
        scheduled_for: '',
        logsCount: 0,
        status: ''
    });

    useEffect(() => {
        // getAutoMechanics().then(
        //     (result) => {
        //         const mechanics = result.data?.users;
        //         console.log(mechanics)
        //     }
        // )
    }, []);

    useEffect(() => {
        if (!isCreateMode && !vehicleId) {
            getRepairRequest({ variables: { id } })
                .then((result) => {
                    const repairRequestWithLogs: Repair_Request_With_LogsFragment = result.data?.repair_requests_by_pk as Repair_Request_With_LogsFragment;
                    if (repairRequestWithLogs) {
                        setRepairRequest(repairRequestWithLogs);
                        setFormData({
                            title: repairRequestWithLogs.title,
                            description: repairRequestWithLogs.description,
                            status: repairRequestWithLogs.vehicle_status.code,
                            logsCount: repairRequestWithLogs.logsCount.aggregate?.count ?? 0,
                            scheduled_for: repairRequestWithLogs.scheduled_for
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            getVehicleById({ variables: { id: vehicleId } }).then(
                ({ data, error }) => {
                    if (error) {
                        // TODO notify and return : No vehicle found..
                    } else {
                        console.log(data?.vehicles_by_pk);
                        setIsLogsVisible(false); // Hide logs
                        setIsFormDisabled(false); // enable the form
                    }
                }
            );

        }
    }, [refresh]);

    useEffect(() => {
        /**
         * Sets the allowed controls based on the user's role.
         */
        switch (userSettings?.user?.user_role.code) {
            case 'customer':
                setIsFormDisabled(location.state?.action === 'preview' || isNullOrUndefined(location.state?.action));
                // if (location.state?.action === 'repair' && location.state.vehicle) {
                //     const vehicle = location.state.vehicle;
                //     console.log('Enable add repair request form!!!!!!!!');
                //     console.log(vehicle);
                // }
                break;
            case 'serviceSpecialist':
                setIsFormDisabled(location.state?.action === 'preview' || isNullOrUndefined(location.state?.action));

                getAutoMechanics().then(
                    (result) => {
                        if (result.data) {
                            const mechanics: UserFragment[] = result.data?.users;
                            console.log(mechanics)
                            setMechanics(mechanics);
                        }
                    }
                )
                break;
            case 'autoMechanic':
                setIsFormDisabled(true);
                setIsButtonAddLogVisible(true);

                if (location.state?.action === 'preview' || isNullOrUndefined(location.state?.action)) {
                    setIsButtonAddLogVisible(false);
                    setIsLogsDisabled(true);
                }
                break;
            default:
                setIsFormDisabled(true);
                break;
        }

    }, [userSettings]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const fieldName = e.target.name;
        let fieldValue = e.target.value;
        setFormData({
            ...formData,// clone form data and replace property with event origin
            [fieldName]: fieldValue,
        });
    };

    const toggleAddLogStates = () => {
        setIsButtonAddLogVisible(false);
        setIsAddLogEnabled(true);
    };

    const handleLogInteraction = (action: COMMENT_ACTIONS, entity: Requests_Logs) => {
        let hasError: boolean = false;
        if (action === 'update') {
            // Here you would typically call an API or update state to persist the changes 
            const input: Requests_Logs_Insert_Input = {
                id: entity.id,
                message: entity.message,
                request_id: id,
                author_id: userSettings?.user?.id as string,
                author_role_id: userSettings?.user?.user_role.id as string
            };
            upsertLog({ variables: { object: input } }).then(_res => {
                setRefresh(e => !e);
                showSnackbar('Промяната е успешна', 'success', 2000);
            }).catch(err => {
                console.log(err);
                hasError = true;
            });

        } else if (action === 'delete') {
            // Handle delete action 

            deleteLog({ variables: { id: entity.id } }).then((_res: FetchResult<DeleteRepairRequestLogMutation>) => {
                setRefresh(e => !e);
                showSnackbar('Изтриването е успешно', 'success', 2000);
            }).catch((err: any) => {
                console.log(err);
                hasError = true;
            });


        } else if (action === 'create') {
            // Handle create action 
            setIsAddLogEnabled(false);
            setIsButtonAddLogVisible(true);
            setRefresh(e => !e);

            const input: Requests_Logs_Insert_Input = {
                message: entity.message,
                request_id: id,
                author_id: userSettings?.user?.id as string,
                author_role_id: userSettings?.user?.user_role.id as string
            };
            upsertLog({ variables: { object: input } }).then(_res => {
                setRefresh(e => !e);
                showSnackbar('Добавянето е успешно', 'success', 2000);
            }).catch(err => {
                console.log(err);
                hasError = true;
            });


        } else if (action === 'none') {
            // Handle none action - used to close the create log form without action

            setIsAddLogEnabled(false);
            setIsButtonAddLogVisible(true);

        }
        if (hasError) {
            showSnackbar('Операцията не беше успешна', 'error', 3000);
        }
    };

    const handleSelectChange = (event: any) => {
        const selectedMechanicID = event.target.value;
        console.log(selectedMechanicID)

        // const selectedFilter: FilterFields | undefined = innerOptions.find(o => o.code === selectedOptionCode);
        // if (selectedFilter) {
        //     setSelected(selectedFilter.code);
        //     filterSelectedHandler(selectedFilter);
        // }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);

        if (repairRequest) { // update RR here
            // const update
            const setInput: Repair_Requests_Set_Input = {
                title: formData.title,
                description: formData.description,

            };

            updateRepairRequest({ variables: { id, input: setInput } }).then((res) => {
                console.log(res);
                const timeout = 2000;
                showSnackbar('Промяната е успешна', 'success', timeout);
                setTimeout(() => {
                    navigate(buildUrl(PathSegments.REPAIR_REQUESTS));
                }, timeout);
            }).catch((err) => {
                showSnackbar('Възникна грешка', 'error', 2000);
            });


        } else { // create new one 
            const insertInput: Repair_Requests_Insert_Input = {
                title: formData.title,
                description: formData.description,
                requested_at: new Date(),
                customer_id: userSettings?.user?.id,
                vehicle_id: vehicleData?.vehicles_by_pk?.id,
                status_id: vehicleStatuses.find(s => s.code === 'repair-request')?.id

            };
            console.log(insertInput);
            createRepairRequest({ variables: { input: insertInput } }).then((res) => {
                console.log(res);
                const timeout = 2000;
                showSnackbar('Добавянето е успешно', 'success', timeout);
                setTimeout(() => {
                    navigate(buildUrl(PathSegments.REPAIR_REQUESTS));
                }, timeout);

            }).catch((err) => {
                showSnackbar('Възникна грешка', 'error', 2000);
            });


        }


    };

    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} parentSegment={PathSegments.REPAIR_REQUESTS} />

            {(!repairRequest && !vehicleData?.vehicles_by_pk) && <DatasourceEmptyResult />}

            {(repairRequest || vehicleData?.vehicles_by_pk) &&
                <>
                    <Paper elevation={1} sx={{ p: 4, borderRadius: 1, marginTop: 1 }}>
                        <Grid
                            component="form"
                            container
                            autoComplete="off"
                            columns={{ xs: 3, md: 6, lg: 9 }}
                            columnSpacing={2}
                            rowGap={1}
                            onSubmit={handleSubmit} >

                            <Grid size={3}>
                                <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                    <MyInputLabel
                                        htmlFor="titleId"
                                        error={errors.some(e => e.controlName === 'title')}

                                    >Заглавие</MyInputLabel>
                                    <OutlinedInput
                                        id="titleId"
                                        name='title'
                                        type='text'
                                        label='title'
                                        disabled={isFormDisabled}
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        error={errors.some(e => e.controlName === 'title')}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid size={3}>
                                <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='bg'>
                                        <DatePicker
                                            minDate={dayjs()}
                                            label="Приемна дата"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    </LocalizationProvider>
                                </FormControl>
                            </Grid>

                            {mechanics.length > 0 &&
                                <Grid size={3}>


                                    <FormControl sx={{ m: 1, width: '100%' }}>
                                        <InputLabel id="mechanicId">Механик</InputLabel>
                                        <Select
                                            labelId="mechanicId"
                                            id="mechanicSelectId"
                                            value={mechanics[0].id}
                                            label="Механик"
                                            onChange={handleSelectChange}
                                            sx={{ textAlign: 'start' }}
                                        >
                                            {mechanics.map(element => <MenuItem
                                                value={element.id} key={element.id}> {element.first_name} {element.last_name}
                                            </MenuItem>)
                                            }
                                        </Select>
                                        {/* <FormHelperText>избери механик</FormHelperText> */}
                                    </FormControl>
                                </Grid>
                            }
                            {/* <Grid size={3}></Grid>
                            <Grid size={3}></Grid> */}

                            <Grid size={9}>
                                <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">

                                    <TextField
                                        id="description"
                                        label="Multiline"
                                        variant='outlined'
                                        name='description'
                                        disabled={isFormDisabled}
                                        multiline
                                        onChange={handleChange}
                                        minRows={5}
                                        value={formData.description ?? ''}
                                    />
                                </FormControl>
                            </Grid>


                            <Grid size={{ xs: 3, md: 6, lg: 9 }} container justifyContent="flex-end" >
                                <Grid size={{ xs: 3, md: 3, lg: 2 }}>

                                    {vehicleData?.vehicles_by_pk && <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2, borderRadius: 2 }}>
                                        Добави
                                    </Button>
                                    }
                                    {!vehicleData?.vehicles_by_pk && <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2, borderRadius: 2 }}
                                    // onClick={() =>
                                    //     // Adding is allowed only from the Vehicles list
                                    //    //  navigate(buildUrl(PathSegments.VEHICLES))
                                    // }
                                    >
                                        Промени
                                    </Button>
                                    }
                                </Grid>
                            </Grid>



                        </Grid>
                    </Paper>


                    {isLogsVisible &&
                        <>
                            <Box sx={{ height: '24px' }}></Box> {/* Spacer */}
                            {/* A log component used for create new RepairRequest log */}
                            {isAddLogEnabled &&
                                <>
                                    <Typography variant='h6' sx={{ fontWeight: 700 }}>Добавяне на коментар</Typography>
                                    <Log
                                        key={'new-log'}
                                        log={{} as any}
                                        isFromCurrentUser={true}
                                        isPreview={false}
                                        isCreateMode={true}
                                        callBack={handleLogInteraction}
                                    />
                                </>
                            }

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, marginBottom: '8px' }}      >
                                <Typography variant='h6' sx={{ fontWeight: 700 }}>Логове на заявката за ремонт</Typography>

                                {isButtonAddLogVisible && <IconButton
                                    size="small"
                                    onClick={toggleAddLogStates}  >
                                    <AddCommentIcon color='primary' />
                                </IconButton>}
                            </Box>


                            <Box sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
                                {repairRequest?.requests_logs.map(l =>
                                    <Log
                                        key={l.id}
                                        log={l as any}
                                        isFromCurrentUser={l.user.id === userSettings?.user?.id}
                                        isPreview={isLogsDisabled}
                                        callBack={handleLogInteraction}
                                    />
                                )}
                            </Box>
                        </>
                    }

                </>
            }
        </>
    );
}