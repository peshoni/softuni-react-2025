import { isNullOrUndefined } from "is-what";
import { Navigate } from "react-router";
import { buildUrl } from "../routes-util";
import { PathSegments } from "../enums";
import ApplicationBar from "../../components/private/ApplicationBar";
import type { UserFragment } from "../../../graphql/generated";

export default function AuthGuard({ user }: { readonly user: UserFragment | undefined; }) {  
    return isNullOrUndefined(user)
        ? <Navigate to={buildUrl(PathSegments.LOGIN)} />
        : <ApplicationBar user={user} />; 
}