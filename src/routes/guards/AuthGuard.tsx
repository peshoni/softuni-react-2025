import { isNullOrUndefined } from "is-what";
import { Navigate } from "react-router";
import { buildUrl } from "../routes-util";
import { PathSegments } from "../enums";
import ApplicationBar from "../../components/private/app-bar/ApplicationBar";
import type { UserFragment } from "../../../graphql/generated";

export default function AuthGuard({ user }: { readonly user: UserFragment | undefined; }) {
    // If the user is not logged in, redirect to the login page.
    // After a successful login, the user will be redirected back to the
    // page they originally tried to access.
    return isNullOrUndefined(user)
        ? <Navigate to={buildUrl(PathSegments.LOGIN)} />
        : <ApplicationBar />;
}