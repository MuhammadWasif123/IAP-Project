import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavbarSimple } from "../../components/navbar/Navbar";
import FooterSection from "../../components/footerSection/footerSection";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isText, setText] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleText = () => setText(!isText);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objToSend = { email, password };
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/admin/login", objToSend,
        {
          withCredentials: true //Required to send and receive cookies
        }
    );
      console.log(res.data);
      history("/admin-dashboard"); 
    } catch (err) {
      alert("Admin login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <NavbarSimple/>
    <div className="outer-box flex items-center justify-center w-full h-screen">
      <div className="inner-box border border-[#8E24AA] rounded-lg w-[400px] h-auto bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center py-6 text-[#8E24AA]">
          Admin Login
        </h1>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Input
                color="purple"
                label="Admin Email"
                placeholder="Enter Admin Email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 relative">
              <Input
                color="purple"
                label="Password"
                placeholder="Enter Password"
                size="lg"
                type={isText ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                onClick={handleText}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 bg-[#8E24AA] text-white text-xs px-2 py-1 rounded cursor-pointer"
              >
                {isText ? "Hide" : "Show"}
              </p>
            </div>
            <div className="mb-5">
              {loading ? (
                <Button className="w-full" loading={true}>
                  Loading...
                </Button>
              ) : (
                <Button type="submit"  className="w-full bg-[#8E24AA]">
                  Login as Admin
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    <FooterSection/>
    </>
  );
};

export default AdminLogin;
