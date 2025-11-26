import { createContext, type SetStateAction } from "react";
import type { UserFragment } from "../../../../graphql/generated";

export interface UserContextProps {
    user: UserFragment | undefined;
    isAuthenticated: boolean;
    onLogin(user: SetStateAction<UserFragment | undefined>): void;
    onLogout(user: SetStateAction<UserFragment | undefined>): void;
}

const UserContext = createContext<UserContextProps>({
    user: undefined,
    isAuthenticated: false,
    onLogin() { },
    onLogout() { },
})

export default UserContext;