import axios from "axios";
import { API_URL } from "../../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('teacher'); // Default to teacher

    const handelUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handelPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handelSubmit = async (event) => {
        event.preventDefault();
        if (!username || !password) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        try {
            const response = await axios.post(`${API_URL}/auth/${role === 'teacher' ? 't' : 'ta'}`, {
                username,
                password
            });
            if (response.data.status) {
                // console.log(response.data);
                localStorage.setItem('token', response.data.token);
                alert("เข้าสู่ระบบสำเร็จ");
                navigate('/', { replace: true });
                // window.location.href = '/';
            } else {
                alert(response.data.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
            }
        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.data) {
                alert(error.response.data.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
            } else {
                alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
            }
        }
    }

    // useEffect(() => {
    //     const isToken = localStorage.getItem('token');
    //     if (isToken) {
    //         return navigate('/', { replace: true })
    //     }
    // }, [])

    return (
        <div className="relative w-screen h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[468px] border border-gray-200 rounded-2xl shadow-xl">
                <div className="p-10">
                    <h1 className="mb-2 text-gray-900 text-center font-bold text-2xl tracking-wide">Login</h1>

                    <form onSubmit={handelSubmit} className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 gap-1">
                            <label htmlFor="username" className="font-norma text-base tracking-normal">Username</label>
                            <input
                                className="w-full border border-gray-300 rounded-lg py-1 px-2 "
                                placeholder="Enter your username"
                                type="text"
                                id="username"
                                name="username"
                                onChange={(e) => handelUsernameChange(e)}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                            <label htmlFor="password " className="font-norma text-base tracking-normal">Password</label>
                            <input
                                className="w-full border border-gray-300 rounded-lg py-1 px-2"
                                placeholder="Enter your password"
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => handelPasswordChange(e)}
                                required />
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <div className="flex gap-2 cursor-pointer" onClick={() => setRole('teacher')}>
                                <div className="w-5 h-5 border border-gray-200 rounded-full relative">
                                    {role === 'teacher' && (
                                        <div className=" bg-gray-900 w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all delay-100"></div>
                                    )}

                                </div>
                                <span className="text-sm font-normal">Teacher</span>
                            </div>
                            <div className="flex gap-2 cursor-pointe" onClick={() => setRole('ta')}>
                                <div className="w-5 h-5 border border-gray-200 rounded-full relative">
                                    {role === 'ta' && (
                                        <div className=" bg-gray-900 w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                    )}
                                </div>
                                <span className="text-sm font-normal">Teacher Assistant</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex gap-2 items-center justify-center cursor-pointer bg-gray-900 font-semibold rounded-full w-full text-white mt-2  mx-auto p-2.5 hover:bg-gray-950 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed "
                        >
                            Login
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default Login;