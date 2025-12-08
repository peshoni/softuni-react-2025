import { useLocation, useParams } from 'react-router';
import { useGetRepairRequestByIdLazyQuery, type Repair_Request_With_LogsFragment, type Repair_RequestFragment, type Requests_Logs, useUpsertRepairRequestLogMutation, type Requests_Logs_Insert_Input, useDeleteRepairRequestLogMutation, type DeleteRepairRequestLogMutation } from '../../../../graphql/generated';
import Log, { type COMMENT_ACTIONS } from './Log';
import { isNullOrUndefined } from 'is-what';
import DetailsHeader from '../common/forms/DetailsHeader';
import DatasourceEmptyResult from '../common/tables/DataSourceEmptyResult';
import UserContext from '../providers/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Box, FormControl, Grid, IconButton, InputLabel, OutlinedInput, Paper, TextField, Typography, styled } from '@mui/material';
import type { FormControlError } from '../common/interfaces';
import AddCommentIcon from '@mui/icons-material/AddComment';
import type { FetchResult } from '@apollo/client';
import { PathSegments } from '../../../routes/enums';
import { useSnackbar } from '../providers/ShackbarContext';

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
    const { showSnackbar } = useSnackbar();
    let { id } = useParams<{ id: string; }>();
    const isCreateMode = isNullOrUndefined(id);
    const location = useLocation();
    const { userSettings } = useContext(UserContext);
    // GraphQL hooks
    const [getRepairRequest] = useGetRepairRequestByIdLazyQuery();
    const [upsertLog] = useUpsertRepairRequestLogMutation();
    const [deleteLog] = useDeleteRepairRequestLogMutation();
    // State variables
    const [repairRequest, setRepairRequests] = useState<Repair_Request_With_LogsFragment | undefined>();

    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [isLogsDisabled, setIsLogsDisabled] = useState<boolean>(false);
    const [isAddLogEnabled, setIsAddLogEnabled] = useState<boolean>(false);
    const [isButtonAddLogVisible, setIsButtonAddLogVisible] = useState<boolean>(true);

    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (!isCreateMode) {
            getRepairRequest({ variables: { id } })
                .then((result) => {
                    const repairRequestWithLogs: Repair_Request_With_LogsFragment = result.data?.repair_requests_by_pk as Repair_Request_With_LogsFragment;
                    if (repairRequestWithLogs) {
                        setRepairRequests(repairRequestWithLogs);
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
        }
    }, [refresh]);

    useEffect(() => {
        /**
         * Sets the allowed controls based on the user's role.
         */
        switch (userSettings?.user?.user_role.code) {
            case 'customer':
                setIsFormDisabled(location.state?.action === 'preview' || isNullOrUndefined(location.state?.action));
                break;
            case 'serviceSpecialist':
                setIsFormDisabled(location.state?.action === 'preview' || isNullOrUndefined(location.state?.action));
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

    const [errors/*, setErrors*/] = useState<FormControlError[]>([]);
    const [formData, setFormData] = useState<FormRepairRequestProps>({
        title: '',
        description: '',
        scheduled_for: '',
        logsCount: 0,
        status: ''
    });

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

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} parentSegment={PathSegments.REPAIR_REQUESTS} />

            {!repairRequest && <DatasourceEmptyResult />}

            {repairRequest &&
                <div>
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
                        </Grid>
                    </Paper>

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
                </div>
            }
        </>
    );
}