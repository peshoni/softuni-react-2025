import { createContext } from "react";
import type { UserFragment } from "../../../../graphql/generated";
import type { LoggedUserMenu } from "../../../App";

export interface UserContextProps {
    user: UserFragment | undefined;
    userMenu: LoggedUserMenu[],
    onLogin(user: UserFragment | undefined): void;
    onLogout(): void;
}

const UserContext = createContext<UserContextProps>({
    user: undefined,
    userMenu: [],
    onLogin(_user: UserFragment) { },
    onLogout() { },
});

export default UserContext;