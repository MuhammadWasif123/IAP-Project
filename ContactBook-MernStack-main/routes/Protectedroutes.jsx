import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protectedroutes = () => {
  return Cookies.get("userToken") ? <Outlet /> : <Navigate to={"/"} />;
};

export default Protectedroutes;
