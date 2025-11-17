import { isNullOrUndefined } from "is-what";
import { Navigate, useLocation } from "react-router";
import { buildUrl } from "../routes-util";
import { PathSegments } from "../enums";
import ApplicationBar from "../../components/private/app-bar/ApplicationBar";
import type { UserFragment } from "../../../graphql/generated";
import type { LoggedUserMenu } from "../../App";

export default function AuthGuard({ user, menu }: { readonly user: UserFragment | undefined; readonly menu: LoggedUserMenu[]; }) { 

    return  isNullOrUndefined(user)  
        ? <Navigate to={buildUrl(PathSegments.LOGIN)} />
        : <ApplicationBar user={user} menu={menu} />;
}