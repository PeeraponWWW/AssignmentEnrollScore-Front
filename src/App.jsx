// import './index.css'
import { useEffect, useState } from "react";
import Login from "./pages/Login"
import { BrowserRouter, Outlet, useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState('');
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
        setRole(response.data.role);
      }
    }catch(error) {
      setIsLogin(false);
      return navigate('/login', { replace: true });
    };
  }

  useEffect(() => {
    isAuth();
  },[])


  return (
    <div>
      <h1>Navbar</h1>
      <Outlet/>
    </div>
  );
}

export default App
