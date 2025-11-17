import { useParams } from "react-router";
import { useGetUserByIdQuery, type UserFragment } from "../../../../graphql/generated";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";
import { isNullOrUndefined } from "is-what";
import DetailsHeader from "../common/forms/DetailsHeader";

export default function CustomerDetails() {
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    let user: UserFragment | undefined | null;
    if (!isCreateMode) {
        user = useGetUserByIdQuery({ variables: { id: params.id } }).data?.users_by_pk;
    }
    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />
            {!user && <DatasourceEmptyResult />}
            {user &&
                <div>
                    details
                    <div>
                        {JSON.stringify(user)}
                    </div>
                </div>
            }
        </>
    );
}