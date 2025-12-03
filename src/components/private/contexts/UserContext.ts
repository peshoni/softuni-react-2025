import { createContext, useContext, type JSX } from "react";
import type { UserFragment } from "../../../../graphql/generated";
import type { LoggedUserMenu } from "../../../App";

export interface UserSettings {
    user: UserFragment | undefined;
    userMenu: LoggedUserMenu[],
    routes: { path: string, element: JSX.Element; }[];
}
/**
 * The context props for the user context.
 */
export interface UserContextProps {
    userSettings: UserSettings | undefined,
    onLogin(user: UserFragment | undefined): UserSettings | undefined;
    onLogout(): void;
}
/**
 * The user context.
 */
const UserContext = createContext<UserContextProps>({
    userSettings: undefined,
    onLogin(_user: UserFragment) { return undefined; },
    onLogout() { },
});
export default UserContext;

/**
 * Hook to use the UserContext.
 * @returns {@see UserContextProps}
 */
export function useUserContext(): UserContextProps {
    return useContext(UserContext);
}