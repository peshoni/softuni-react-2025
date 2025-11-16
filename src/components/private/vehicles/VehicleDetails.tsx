import { isNullOrUndefined } from "is-what";
import { useParams } from "react-router";
import { useGetVehicleByIdQuery, type VehicleFragment } from "../../../../graphql/generated";
import DetailsHeader from "../common/forms/DetailsHeader";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";

export default function VehicleDetails() {
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    let vehicle: VehicleFragment | undefined | null;
    if (!isCreateMode) {
        vehicle = useGetVehicleByIdQuery({ variables: { id: params.id } }).data?.vehicles_by_pk;
    }
    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />

            {!vehicle && <DatasourceEmptyResult />}
            {vehicle &&
                <div>
                    details
                    <div>
                        {JSON.stringify(vehicle)}
                    </div>
                </div>
            }
        </>
    );
}