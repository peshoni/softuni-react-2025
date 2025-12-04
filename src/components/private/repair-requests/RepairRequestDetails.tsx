import { useLocation, useParams } from 'react-router'; 
import { useGetRepairRequestByIdLazyQuery, type Repair_Request_With_LogsFragment, type Repair_RequestFragment } from '../../../../graphql/generated';
import Log from './Log';
import { isNullOrUndefined } from 'is-what';
import DetailsHeader from '../common/forms/DetailsHeader';
import DatasourceEmptyResult from '../common/tables/DataSourceEmptyResult';
import UserContext from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Box, FormControl, Grid, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material';
import type { FormControlError } from '../common/interfaces';


//#region Form Types 
const omitRepairRequestProperties = ['id', 'created_at', 'updated_at', 'logsCount', 'vehicle', 'vehicle_status'] as const;
type FilteredProperties = Pick<Repair_RequestFragment, typeof omitRepairRequestProperties[number]>;
type FormRepairRequestProps = Omit<Repair_RequestFragment, keyof FilteredProperties> & { logsCount: number; status: string; };
//#endregion Form Types

export default function RepairRequestDetails() {
    let { id } = useParams<{ id: string; }>();
    const location = useLocation();
    const { userSettings } = useContext(UserContext);
    const [getRepairRequest] = useGetRepairRequestByIdLazyQuery();
    const [repairRequest, setRepairRequests] = useState<Repair_Request_With_LogsFragment | undefined>();

    console.log('RepairRequestDetails id=', id);
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    // let repairRequest: Repair_Request_With_LogsFragment | undefined | null;

    useEffect(() => {
        if (!isCreateMode) {
            if (!isCreateMode) {
                // todo FIX THIS 

                getRepairRequest({ variables: { id: params.id } })
                    .then((result) => {
                        const res: Repair_Request_With_LogsFragment = result.data?.repair_requests_by_pk as Repair_Request_With_LogsFragment;
                        if (res) {
                            setRepairRequests(res);
                            setFormData({
                                title: res.title,
                                description: res.description,
                                status: res.vehicle_status.code,
                                logsCount: res.logsCount.aggregate?.count ?? 0,
                                scheduled_for: res.scheduled_for
                            });
                            console.log(res);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    }
                    );
                //  repairRequest = useGetRepairRequestByIdQuery({ variables: { id: params.id } }).data?.repair_requests_by_pk;
            }

            //     // vehicle = useGetVehicleByIdQuery({ variables: { id: params.id } }).data?.vehicles_by_pk;
        }
    }, []);

    const isFormDisabled = location.state?.action === 'preview';
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
        // if (fieldName === 'year') {
        //     fieldValue = Number(fieldValue);
        //     if ((fieldValue < 1980 || fieldValue > 2025) && !errors.some(c => c.controlName === fieldName)) {
        //         errors.push({ controlName: fieldName });
        //     } else if (fieldValue >= 1980 && fieldValue < 2025) {
        //         setErrors(err => err.filter(e => e.controlName !== fieldName));
        //     }
        // } else {
        //     const index = errors.findIndex(c => c.controlName === fieldName);
        //     console.log(index);
        //     if (index > -1) { // only splice array when item is found

        //         console.log(errors.splice(index, 1)); // 2nd parameter means remove one item only
        //         console.log(errors);
        //         setErrors(old => old.filter(c => c.controlName === fieldName));
        //     }
        // }

        setFormData({
            ...formData,// clone form data and replace property with event origin
            [fieldName]: e.target.value,
        });
    };

    const handleRowInteraction = (action: string, entity: object) => {
        console.log(`Action: ${action} on log id: ${entity as any}.id`);
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
                                    <InputLabel htmlFor="titleId" error={errors.some(e => e.controlName === 'title')} >Заглавие</InputLabel>
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
                                        disabled={false}        // contentEditable={true}

                                        multiline
                                        onChange={handleChange}
                                        minRows={5}
                                        value={formData.description ?? ''}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid> 
                    </Paper>

                    <Box sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
                        {repairRequest?.requests_logs.map(l => <Log key={l.id} log={l as any} isFromCurrentUser={l.user.id === userSettings?.user?.id} />)}
                    </Box>
                </div>
            }
        </>
    );
}