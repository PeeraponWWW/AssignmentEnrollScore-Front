// import './index.css'
import { useEffect, useState } from "react";
import Login from "./pages/Login"
import { BrowserRouter, Outlet, useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config";
import Navbar from "./Navbar";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const isAuth = async () => {
    const token = localStorage.getItem('token');
    if(!token) {
      setIsLogin(false);
      return navigate('/login', { replace: true });
    };
    try {
      const response = await axios.get(`${API_URL}/auth/checkAuth`,{
        headers: { Authorization: `Bearer ${token}`}
      });
      // console.log(response);
      if(response.data.status == 'success') {
        setIsLogin(true);
        setUserInfo(response.data.userInfo);
      }
    }catch(error) {
      setIsLogin(false);
      return navigate('/login', { replace: true });
    };
  }

  const logout = async () => {
    if(isLogin) {
      localStorage.removeItem('token');
      return navigate('/login', { replace: true });
    };
  };

  useEffect(() => {
    isAuth();
  },[])

  const navbarMenuItems = [
    {
      image: 'home.svg', name:'Home', role: ['teacher']
    },
    {
      image: 'subject.svg', name: 'Subject', role: ['teacher']
    },
  ]


  return (
    <div className="flex">
      <Navbar
        logout={logout}
        userInfo={userInfo}
        menuItems={navbarMenuItems}
      />
      <div className="mx-10 mt-20 md:mx-20 md:mt-10 w-full">
        <Outlet/>
      </div>
      
    </div>
  );
}

export default App
