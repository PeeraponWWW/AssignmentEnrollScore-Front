// import './index.css'
import { useEffect, useState } from "react";
import Login from "./pages/Login"

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  
  // useEffect(() => {
  //   if(!localStorage.getItem('token')) {
  //     setLoginStatus(false);
  //   }else {
  //     setLoginStatus(true);
  //     window.location.href = '/';
  //   }
  //   // console.log("Login status:", loginStatus);
  // },[loginStatus])


  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
