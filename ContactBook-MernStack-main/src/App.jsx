import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardContact from "./pages/DashboardContact/DashboardContact.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import PageNotfound from "./pages/Notfound/PageNotfound.jsx";
import Protectedroutes from "../routes/Protectedroutes.jsx";
import AuthenticateRoute from "../routes/AuthenticateRoute.jsx";
import TeamMember from "./pages/TeamMember/TeamMember.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotfound />} />
        <Route path="/team-member" element={<TeamMember />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route element={<AuthenticateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<Protectedroutes />}>
          <Route path="/dashboard" element={<DashboardContact />} />
        </Route>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
