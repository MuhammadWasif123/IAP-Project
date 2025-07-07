import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedAdmin = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("adminToken");
  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
    }
  }, [token]);
  return children;
};

export default ProtectedAdmin;
