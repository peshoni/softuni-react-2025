import { useMemo, useState, type JSX, type ReactNode } from "react";
import type { RoleFragment, UserFragment } from "../../../../graphql/generated";
import { type LoggedUserMenu } from "../../../App";
import type { UserContextProps } from "./UserContext";
import UserContext from "./UserContext";
import { buildUrl } from "../../../routes/routes-util";
import RepairRequestDetails from "../repair-requests/RepairRequestDetails";
import RepairRequestsList from "../repair-requests/RepairRequestsList";
import CustomerDetails from "../users/CustomerDetails";
import CustomersList from "../users/CustomersList";
import VehicleDetails from "../vehicles/VehicleDetails";
import VehiclesList from "../vehicles/VehiclesList";
import GroupIcon from '@mui/icons-material/Group';
import CommuteIcon from '@mui/icons-material/Commute';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { PathSegments } from "../../../routes/enums";

export function UserProvider({ children }: Readonly<{ children: ReactNode; }>) {
    const [routes, setRoutes] = useState<{ path: string, element: JSX.Element; }[]>([]);
    const [userMenu, setUserMenu] = useState<LoggedUserMenu[]>([]);
    const [user, setUser] = useState<UserFragment | undefined>();

    const loginHandler = (user: UserFragment) => {
        setUser(user);
        const role: RoleFragment = user.user_role;
        const allowedPaths: LoggedUserMenu[] = buildMenuAccordingRole(role);
        setRoutes(buildRoutesAccordingToRole(role));
        setUserMenu(allowedPaths);

        localStorage.setItem('customer', JSON.stringify(user));
    };

    const logoutHandler = () => {
        setUser(undefined);
    };

    const userContextValue: UserContextProps = useMemo(() => ({
        user,
        userMenu,
        routes,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }), [user]);

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}
/**
 *  Builds the menu according to the role.
 * @param role  
 * @returns 
 */
const buildMenuAccordingRole = (role: RoleFragment): LoggedUserMenu[] => {
    const customers: LoggedUserMenu = { label: 'Клиенти', icon: <GroupIcon />, path: PathSegments.CUSTOMERS };
    const vehicles: LoggedUserMenu = { label: 'Автомобили', icon: <CommuteIcon />, path: PathSegments.VEHICLES };
    const repairRequests: LoggedUserMenu = { label: 'Заявки за ремонт', icon: <CarRepairIcon />, path: PathSegments.REPAIR_REQUESTS };

    switch (role.code) {
        case 'customer':
            return [vehicles, repairRequests];
        case 'serviceSpecialist':
            return [customers, vehicles, repairRequests];
        case 'autoMechanic':
            return [repairRequests];
        default:
            return [];
    }
};

const buildRoutesAccordingToRole = (role: RoleFragment): { path: string, element: JSX.Element; }[] => {
    const routes: { path: string, element: JSX.Element; }[] = [];

    const customersList = { path: PathSegments.CUSTOMERS, element: <CustomersList /> };
    const customerDetails = { path: buildUrl(PathSegments.CUSTOMERS, PathSegments.DETAILS, ':id'), element: <CustomerDetails /> };
    const vehiclesList = { path: PathSegments.VEHICLES, element: <VehiclesList /> };
    const vehicleDetails = { path: buildUrl(PathSegments.VEHICLES, PathSegments.DETAILS, ':id'), element: <VehicleDetails /> };
    const repairRequestsList = { path: PathSegments.REPAIR_REQUESTS, element: <RepairRequestsList /> };
    const repairRequestDetails = { path: buildUrl(PathSegments.REPAIR_REQUESTS, PathSegments.DETAILS, ':id'), element: <RepairRequestDetails /> };

    switch (role.code) {
        case 'customer':
            return [vehiclesList, vehicleDetails, repairRequestsList, repairRequestDetails];
        case 'serviceSpecialist':
            return [customersList, customerDetails, vehiclesList, vehicleDetails, repairRequestsList, repairRequestDetails];
        case 'autoMechanic':
            return [vehiclesList, vehicleDetails, repairRequestsList, repairRequestDetails];
        default:
            return routes;
    }
};