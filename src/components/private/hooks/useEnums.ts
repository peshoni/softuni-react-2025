import { useGetEnumsQuery, type GenderFragment, type RoleFragment, type Vehicle_StatusFragment } from "../../../../graphql/generated";
/**
 *  Hook to fetch enumeration data such as genders, user roles, and vehicle statuses.   
 * @returns  An object containing arrays of genders, user roles, and vehicle statuses.
 */
export default function useEnums(): {
    genders: GenderFragment[];
    userRoles: RoleFragment[];
    vehicleStatuses: Vehicle_StatusFragment[];
} {
    const getEnums = useGetEnumsQuery();
    let genders: GenderFragment[] = [];
    let userRoles: RoleFragment[] = [];
    let vehicleStatuses: Vehicle_StatusFragment[] = [];
    if (getEnums.data) {
        genders = getEnums.data.genders;
        vehicleStatuses = getEnums.data.vehicle_statuses;
        userRoles = getEnums.data.user_roles;
    }
    return { genders, userRoles, vehicleStatuses };
}