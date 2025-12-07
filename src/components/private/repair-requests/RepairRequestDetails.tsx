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
    let { id } = useParams<{ id: string; }>();
    const location = useLocation();
    const { userSettings } = useContext(UserContext);
    // GraphQL hooks
    const [getRepairRequest] = useGetRepairRequestByIdLazyQuery();
    const [upsertLog] = useUpsertRepairRequestLogMutation();
    const [deleteLog] = useDeleteRepairRequestLogMutation();
    // State variables
    const [repairRequest, setRepairRequests] = useState<Repair_Request_With_LogsFragment | undefined>();

    console.log('RepairRequestDetails id=', id);
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);

    const [isAddLogEnabled, setIsAddLogEnabled] = useState<boolean>(false);
    const [isButtonAddLogVisible, setIsButtonAddLogVisible] = useState<boolean>(true);
    // let repairRequest: Repair_Request_With_LogsFragment | undefined | null;

    useEffect(() => {
        if (!isCreateMode) {
            if (!isCreateMode) {
                // todo FIX THIS 

                getRepairRequest({ variables: { id: params.id } })
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
                            console.log(repairRequestWithLogs);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    }
                    );
            }
        }
    }, []);

    const isFormDisabled = location.state?.action === 'preview' || isNullOrUndefined(location.state?.action);

    const [errors, setErrors] = useState<FormControlError[]>([]);
    const [formData, setFormData] = useState<FormRepairRequestProps>({
        title: '',
        description: '',
        scheduled_for: '',
        logsCount: 0,
        status: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        console.log([e.target.name], e.target.value);

        const fieldName = e.target.name;
        let fieldValue = e.target.value;
        setFormData({
            ...formData,// clone form data and replace property with event origin
            [fieldName]: fieldValue,
        });
    };

    const handleAddLog = () => {
        console.log('Add log clicked');
        setIsAddLogEnabled(true);

        setIsButtonAddLogVisible(false);

        // hide button here
    }

    const handleLogInteraction = (action: COMMENT_ACTIONS, entity: Requests_Logs) => {

        console.log(entity);
        if (action === 'update') {
            // Here you would typically call an API or update state to persist the changes
            console.log(`Updated log message to: ${entity as any}.message`);
            const input: Requests_Logs_Insert_Input = {
                id: entity.id,
                message: entity.message,
                request_id: id,
                author_id: userSettings?.user?.id as string,
                author_role_id: userSettings?.user?.user_role.id as string
            }
            upsertLog({ variables: { object: input } }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });

        } else if (action === 'delete') {
            // Handle delete action
            console.log(`Deleted log with id: ${entity as any} `);

            deleteLog({ variables: { id: entity.id } }).then((res: FetchResult<DeleteRepairRequestLogMutation>) => {
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
            });


        } else if (action === 'create') {
            // Handle create action
            console.log(`Created log with message: ${entity as any}.message`);
            setIsAddLogEnabled(false);
            setIsButtonAddLogVisible(true);

            const input: Requests_Logs_Insert_Input = {
                message: entity.message,
                request_id: id,
                author_id: userSettings?.user?.id as string,
                author_role_id: userSettings?.user?.user_role.id as string
            }
            upsertLog({ variables: { object: input } }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });


        } else if (action === 'none') {
            // Handle none action - used to close the create log form without action
            console.log(`Create log cancelled`);
            setIsAddLogEnabled(false);
            setIsButtonAddLogVisible(true);

        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />

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
                                    {/* <InputLabel htmlFor="titleId" error={errors.some(e => e.controlName === 'description')} >Описание</InputLabel> */}

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
                                isParentDisabled={false}
                                isCreateMode={true}
                                callBack={handleLogInteraction}
                            />
                        </>
                    }

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, marginBottom: '8px' }}      >
                        <Typography variant='h6' sx={{ fontWeight: 700 }}>Логове на заявката за ремонт</Typography>

                        {!isFormDisabled && isButtonAddLogVisible && <IconButton
                            size="small"
                            onClick={handleAddLog}  >
                            <AddCommentIcon color='primary' />
                        </IconButton>}
                    </Box>


                    <Box sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
                        {repairRequest?.requests_logs.map(l =>
                            <Log
                                key={l.id}
                                log={l as any}
                                isFromCurrentUser={l.user.id === userSettings?.user?.id}
                                isParentDisabled={isFormDisabled}
                                callBack={handleLogInteraction}
                            />
                        )}
                    </Box>
                </div>
            }
        </>
    );
}