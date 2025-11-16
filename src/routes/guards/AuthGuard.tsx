import { isNullOrUndefined } from "is-what";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard({ user }: { readonly user: object | undefined; }) {

    if (isNullOrUndefined(user)) {
        return <Navigate to={"/login"} />;
    }

   return <Navigate to={"/"} />;

}