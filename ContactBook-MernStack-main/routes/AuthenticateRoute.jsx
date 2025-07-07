import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticateRoute = () => {
  return !Cookies.get("userToken") ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard"} />
  );
};
export default AuthenticateRoute;
