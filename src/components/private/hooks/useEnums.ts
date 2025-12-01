import { useGetEnumsQuery, type Fuel_TypeFragment, type GenderFragment, type RoleFragment, type Vehicle_StatusFragment } from "../../../../graphql/generated";
/**
 *  Custom hook that uses a custom hook from Apollo to fetch enumeration data such as genders, user roles, and vehicle statuses.   
 * @returns  An object containing arrays of genders, user roles, and vehicle statuses.
 */
export default function useEnums(): {
    genders: GenderFragment[];
    userRoles: RoleFragment[];
    vehicleStatuses: Vehicle_StatusFragment[];
    fuelTypes: Fuel_TypeFragment[];
} {
    const getEnums = useGetEnumsQuery();
    let genders: GenderFragment[] = [];
    let userRoles: RoleFragment[] = [];
    let vehicleStatuses: Vehicle_StatusFragment[] = [];
    let fuelTypes: Fuel_TypeFragment[] = [];
    
    if (getEnums.data) {
        genders = getEnums.data.genders;
        vehicleStatuses = getEnums.data.vehicle_statuses;
        userRoles = getEnums.data.user_roles;
        fuelTypes = getEnums.data.fuel_types;
    }
    return { genders, userRoles, vehicleStatuses, fuelTypes };
}