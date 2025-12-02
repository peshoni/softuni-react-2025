import { createContext, useContext, type JSX } from "react";
import type { UserFragment } from "../../../../graphql/generated";
import type { LoggedUserMenu } from "../../../App";

/**
 * The context props for the user context.
 */
export interface UserContextProps {
    user: UserFragment | undefined;
    userMenu: LoggedUserMenu[],
    routes: { path: string, element: JSX.Element; }[],
    onLogin(user: UserFragment | undefined): void;
    onLogout(): void;
}
/**
 * The user context.
 */
const UserContext = createContext<UserContextProps>({
    user: undefined,
    userMenu: [],
    routes: [],
    onLogin(_user: UserFragment) { },
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