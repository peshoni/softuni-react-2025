import { useLocation, useNavigate, useParams } from 'react-router';
import { useGetRepairRequestByIdLazyQuery, type Repair_Request_With_LogsFragment, type Repair_RequestFragment, type Requests_Logs, useUpsertRepairRequestLogMutation, type Requests_Logs_Insert_Input, useDeleteRepairRequestLogMutation, type DeleteRepairRequestLogMutation, useGetVehicleByIdLazyQuery, useCreateRepairRequestMutation, useUpdateRepairRequestMutation, type Repair_Requests_Insert_Input, type Repair_Requests_Set_Input, useGetAutoMechanicsQuery } from '../../../../graphql/generated';
import Log, { type COMMENT_ACTIONS } from './Log';
import { isNullOrUndefined } from 'is-what';
import DetailsHeader, { type HEADER_MODES } from '../common/forms/DetailsHeader';
import DatasourceEmptyResult from '../common/tables/DataSourceEmptyResult';
import UserContext from '../providers/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Tooltip, Typography, styled } from '@mui/material';
import type { FormControlError } from '../common/interfaces';
import AddCommentIcon from '@mui/icons-material/AddComment';
import type { FetchResult } from '@apollo/client';
import { PathSegments } from '../../../routes/enums';
import { useSnackbar } from '../providers/SnackbarContext';
import { buildUrl } from '../../../routes/routes-util';
import useEnums from '../hooks/useEnums';
import dayjs from 'dayjs';
import { LocalizationProvider, type DateTimeValidationError, type PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { PickerValue } from '@mui/x-date-pickers/internals';

//#region Form Types 
const omitRepairRequestProperties = ['id', 'created_at', 'updated_at', 'logsCount', 'vehicle', 'vehicle_status'] as const;
type FilteredProperties = Pick<Repair_RequestFragment, typeof omitRepairRequestProperties[number]>;
type FormRepairRequestProps = Omit<Repair_RequestFragment, keyof FilteredProperties> & { logsCount: number; status: string; };
//#endregion Form Types 

const MyInputLabel = styled(InputLabel)(() => ({
    backgroundColor: 'white',
    paddingRight: '8px'
}));

const StyledFormControl = styled(FormControl)(() => ({
    margin: '8px 0',
    width: '100%',
}));

export default function RepairRequestDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    let { id } = useParams<{ id: string; }>();
    let { vehicleId } = useParams<{ vehicleId: string; }>();

    // utils and variables
    const { userSettings } = useContext(UserContext);
    const { showSnackbar } = useSnackbar();
    const { vehicleStatuses } = useEnums();

    // GraphQL hooks
    const [getVehicleById, { data: vehicleData }] = useGetVehicleByIdLazyQuery();
    const [getRepairRequest] = useGetRepairRequestByIdLazyQuery();
    const [createRepairRequest] = useCreateRepairRequestMutation();
    const [updateRepairRequest] = useUpdateRepairRequestMutation();
    const [upsertLog] = useUpsertRepairRequestLogMutation();
    const [deleteLog] = useDeleteRepairRequestLogMutation();
    const { data: mechanics } = useGetAutoMechanicsQuery();

    // State variables
    const [repairRequest, setRepairRequest] = useState<Repair_Request_With_LogsFragment>();
    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [isLogsListVisible, setIsLogsListVisible] = useState<boolean>(false);
    const [isAddLogEnabled, setIsAddLogEnabled] = useState<boolean>(false);
    const [isLogsVisible, setIsLogsVisible] = useState<boolean>(true);
    const [isButtonAddLogVisible, setIsButtonAddLogVisible] = useState<boolean>(true);
    const [isDateAndTechVisible, setIsDateAndTechVisible] = useState<boolean>(false);
    const [refresh, setRefresh] = useState(true);
    const [mode, setMode] = useState<HEADER_MODES>("preview");
    const [errors/*, setErrors*/] = useState<FormControlError[]>([]);

    const [formData, setFormData] = useState<FormRepairRequestProps>({
        title: '',
        description: '',
        scheduled_for: undefined,
        logsCount: 0,
        status: '',
        automechanic_id: ''
    });

    useEffect(() => {
        getVehicleById({ variables: { id: vehicleId } }).then(
            ({ error }) => {
                if (error) {
                    const timeout = 2000;
                    showSnackbar('Не бяха открити данни', 'error', timeout);
                    setTimeout(() => {
                        navigate(buildUrl(PathSegments.REPAIR_REQUESTS));
                    }, timeout);
                }
            }
        );

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
                        scheduled_for: repairRequestWithLogs.scheduled_for ?? '',
                        automechanic_id: repairRequestWithLogs.automechanic_id ?? '',
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, [refresh]);

    useEffect(() => {
        if (isNullOrUndefined(location.state?.action)) {
            // return - too many refresh.. 
        }
        const isCreateMode = location.pathname.startsWith(buildUrl(PathSegments.REPAIR_REQUESTS, PathSegments.CREATE)) && !isNullOrUndefined(vehicleId);

        if (isCreateMode) {
            setMode('create');
            setIsFormDisabled(false);
            setIsLogsVisible(false);
        } else if (location.state?.action) {
            if (location.state?.action === 'preview') {
                setMode('preview');
                setIsFormDisabled(true);
                setIsDateAndTechVisible(true);
                setIsAddLogEnabled(false);
                setIsLogsListVisible(true);
            } else if (location.state?.action === 'edit' && !isCreateMode) {
                setMode('update');
            }
        }

        /**
         * Sets the allowed controls based on the user's role.
         */
        switch (userSettings?.user?.user_role.code) {
            case 'customer':
                break;
            case 'serviceSpecialist':
                setIsDateAndTechVisible(true);
                break;
            case 'autoMechanic':
                setIsFormDisabled(true);
                setIsDateAndTechVisible(true);
                break;
            default:
                break;
        }

    }, [userSettings, vehicleData]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const fieldName = e.target.name;
        let fieldValue = e.target.value;
        setFormData({
            ...formData,// clone form data and replace property with event origin
            [fieldName]: fieldValue,
        });
    };

    const handleDateChange = (value: PickerValue, _context: PickerChangeHandlerContext<DateTimeValidationError>) => {
        const date = value?.toISOString();
        setFormData({
            ...formData,// clone form data and replace property with event origin
            'scheduled_for': date,
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
            }).catch(_err => {
                hasError = true;
            });

        } else if (action === 'delete') {
            // Handle delete action  
            deleteLog({ variables: { id: entity.id } }).then((_res: FetchResult<DeleteRepairRequestLogMutation>) => {
                setRefresh(e => !e);
                showSnackbar('Изтриването е успешно', 'success', 2000);
            }).catch(_err => {
                hasError = true;
            });

        } else if (action === 'create') {
            // Handle create action 
            setIsButtonAddLogVisible(true);
            setIsAddLogEnabled(false);
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
            }).catch(_err => {
                hasError = true;
            });

        } else if (action === 'none') {
            // Handle none action - used to close the create log form without action 
            setIsButtonAddLogVisible(true);
            setIsAddLogEnabled(false);
        }
        if (hasError) {
            showSnackbar('Операцията не беше успешна', 'error', 3000);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (repairRequest) { // update RR here 
            const setInput: Repair_Requests_Set_Input = {
                title: formData.title,
                description: formData.description
            };

            if (formData.automechanic_id.length) {
                setInput.automechanic_id = formData.automechanic_id;
            }

            if (formData.scheduled_for.length > 0) {
                setInput.scheduled_for = formData.scheduled_for;
            }

            updateRepairRequest({ variables: { id, input: setInput } }).then((res) => {
                if (res.errors) {
                    showSnackbar('Възникна грешка', 'error', 2000);
                } else {

                    const timeout = 2000;
                    showSnackbar('Промяната е успешна', 'success', timeout);
                    setTimeout(() => {
                        navigate(buildUrl(PathSegments.REPAIR_REQUESTS));
                    }, timeout);
                }
            }).catch(() => {
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

            createRepairRequest({ variables: { input: insertInput } }).then(({ data }) => {
                if (data?.insert_repair_requests_one) {
                    const timeout = 2000;
                    showSnackbar('Добавянето е успешно', 'success', timeout);
                    setTimeout(() => {
                        navigate(buildUrl(PathSegments.REPAIR_REQUESTS));
                    }, timeout);
                }

            }).catch(() => {
                showSnackbar('Възникна грешка', 'error', 2000);
            });
        }

    };

    return (
        <>
            <DetailsHeader mode={mode} parentSegment={PathSegments.REPAIR_REQUESTS} />

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
                                <StyledFormControl variant="outlined">
                                    <MyInputLabel
                                        htmlFor="titleId"
                                        error={errors.some(e => e.controlName === 'title')} >Заглавие</MyInputLabel>
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
                                </StyledFormControl>
                            </Grid>

                            {/* Date */}
                            {isDateAndTechVisible &&
                                <Grid size={3}>
                                    <StyledFormControl variant="outlined">
                                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-GB'}>
                                            <DateTimePicker
                                                disabled={isFormDisabled}
                                                ampm={false}
                                                onError={() => { }}
                                                disablePast
                                                label="Приемна дата"
                                                name='scheduled_for'
                                                value={formData.scheduled_for ? dayjs(formData.scheduled_for) : null}
                                                onChange={handleDateChange}
                                                views={['day', 'month', 'year', 'hours', 'minutes']}
                                                format='DD/MM/YYYY HH:mm'
                                                localeText={{ okButtonLabel: 'Избери', cancelButtonLabel: 'Затвори' }}
                                            />
                                        </LocalizationProvider>
                                    </StyledFormControl>
                                </Grid>
                            }

                            {isDateAndTechVisible && mechanics && mechanics.users?.length > 0 &&
                                <Grid size={3}>
                                    <StyledFormControl>
                                        <InputLabel id="mechanicId">Механик</InputLabel>
                                        <Select
                                            disabled={isFormDisabled}
                                            labelId="mechanicId"
                                            id="mechanicSelectId"
                                            name='automechanic_id'
                                            value={formData.automechanic_id}
                                            label="Механик"
                                            onChange={handleChange}
                                            sx={{ textAlign: 'start' }}
                                        >
                                            {mechanics?.users?.map(element => <MenuItem
                                                value={element.id} key={element.id}> {element.first_name} {element.last_name}
                                            </MenuItem>)
                                            }
                                        </Select>
                                        {/* <FormHelperText>избери механик</FormHelperText> */}
                                    </StyledFormControl>
                                </Grid>
                            }

                            <Grid size={9}>
                                <StyledFormControl >
                                    <TextField
                                        id="description"
                                        label="Описание"
                                        variant='outlined'
                                        name='description'
                                        disabled={isFormDisabled}
                                        multiline
                                        onChange={handleChange}
                                        minRows={5}
                                        value={formData.description ?? ''}
                                    />
                                </StyledFormControl>
                            </Grid>

                            {!isFormDisabled && <Grid size={{ xs: 3, md: 6, lg: 9 }} container justifyContent="flex-end" >
                                <Grid size={{ xs: 3, md: 3, lg: 2 }}>
                                    {mode === 'update' && <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2, borderRadius: 2 }}>
                                        Промени
                                    </Button>
                                    }
                                    {mode === 'create' && <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2, borderRadius: 2 }}
                                    >
                                        Добави
                                    </Button>
                                    }
                                </Grid>
                            </Grid>
                            }
                        </Grid>
                    </Paper>

                    {isLogsVisible &&
                        <>
                            <Box sx={{ height: '24px' }}></Box> {/* Spacer */}
                            {/* A log component used for create new RepairRequest log */}
                            {mode === 'update' && isAddLogEnabled &&
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

                                {mode === 'update' && isButtonAddLogVisible &&
                                    <Tooltip title={<h1 style={{ color: "white", fontSize: "18px" }}>Добави коментар</h1>} >
                                        <IconButton
                                            size="small"
                                            onClick={toggleAddLogStates}  >
                                            <AddCommentIcon color='primary' sx={{ fontSize: 40 }} />
                                        </IconButton>
                                    </Tooltip>
                                }
                            </Box>


                            <Box sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
                                {repairRequest?.requests_logs.map(l =>
                                    <Log
                                        key={l.id}
                                        log={l as any}
                                        isFromCurrentUser={l.user.id === userSettings?.user?.id}
                                        isPreview={isLogsListVisible}
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