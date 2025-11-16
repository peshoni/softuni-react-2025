import { useParams } from 'react-router';
import List from '@mui/material/List';
import { useGetRepairRequestByIdQuery, type Repair_Request_With_LogsFragment } from '../../../../graphql/generated';
import Log from './Log';
import { isNullOrUndefined } from 'is-what';
import DetailsHeader from '../common/forms/DetailsHeader';
import DatasourceEmptyResult from '../common/tables/DataSourceEmptyResult';

export default function RepairRequestDetails() {
    let { id } = useParams<{ id: string; }>(); 
    console.log('RepairRequestDetails id=', id);
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    let repairRequest: Repair_Request_With_LogsFragment | undefined | null;
    if (!isCreateMode) {
        repairRequest = useGetRepairRequestByIdQuery({ variables: { id: params.id } }).data?.repair_requests_by_pk;
    }
    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />

            {!repairRequest && <DatasourceEmptyResult />}
            {repairRequest &&
                <div>

                    <div>
                        {JSON.stringify(repairRequest)}
                    </div>
                    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
                        {repairRequest?.requests_logs.map(l => <Log key={l.id} log={l as any} isFromCurrentUser={false} />)}
                    </List>
                </div>
            }
        </>
    );
}