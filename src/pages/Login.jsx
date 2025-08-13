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

    useEffect(() => {
        const isToken = localStorage.getItem('token');
        if(isToken) {
            return navigate('/', { replace: true })
        }
    },[])

    return (
        <div className="relative w-screen h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[468px] border border-gray-200 rounded-2xl shadow-xl">
                <div className="px-6 pb-6">
                    <div className="flex flex-col items-center gap-1 mb-4">
                        <img src="/catwork.jpg" alt='catwork' className="w-32 h-32 " />
                        <h1 className="font-medium">สวัสดี {role == 'teacher' ? 'อาจารย์' : 'อาจารย์ผู้ช่วย'}</h1>
                    </div>

                    <form onSubmit={handelSubmit} className="grid grid-cols-1 gap-3">
                        <div className="grid grid-cols-1 gap-0.5">
                            <label htmlFor="username">Username</label>
                            <input
                                className="border border-gray-300 rounded-md p-1"
                                // placeholder="Username"
                                type="text"
                                id="username"
                                name="username"
                                onChange={(e) => handelUsernameChange(e)}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-0.5">
                            <label htmlFor="password">Password</label>
                            <input
                                className="border border-gray-300 rounded-md p-1"
                                // placeholder="Password"
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => handelPasswordChange(e)}
                                required />
                        </div>
                        <div className="grid grid-cols-1 gap-0.5">
                            <label htmlFor="role">Role</label>
                            <select
                                className="border border-gray-300 rounded-md p-1"
                                id="role"
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="teacher">อาจารย์</option>
                                <option value="ta">อาจารย์ผู้ช่วย</option>
                            </select>
                        </div>
                        {/* <div>ลืมรหัสผ่าน</div> */}
                        <button
                            type="submit"
                            className="flex gap-2 items-center justify-center bg-orange-300 font-semibold rounded-full w-32 text-white mt-2  mx-auto p-2.5 hover:bg-orange-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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