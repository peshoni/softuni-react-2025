import { useParams } from "react-router";
import { useGetUserByIdQuery, type UserFragment } from "../../../../graphql/generated";
import EmptyDatasource from "../common/tables/EmptyDataSources";
import { isNullOrUndefined } from "is-what";
import DetailsHeader from "../common/forms/DetailsHeader";

export default function UserDetails() {
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    let user: UserFragment | undefined | null;
    if (!isCreateMode) {
        user = useGetUserByIdQuery({ variables: { id: params.id } }).data?.users_by_pk;
    }
    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />

            {!user && <EmptyDatasource />}
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