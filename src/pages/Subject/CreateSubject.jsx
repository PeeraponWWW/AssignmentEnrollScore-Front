import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { API_URL } from "../../../config";

function CreateSubject() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        subjectName : "",
        subjectCode : "",
        academicYear : "",
        term: ""
    });

    const handelChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }));
        // console.log(formData);
    };

    const handelSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`${API_URL}/t/subject`, {subject: {...formData}});
            if(response.data.status === 'success') {
                alert('สร้างวิชาเรียนสำเร็จ');
                navigate('/subject', { replace: true });
            }
        }catch(error) {
            // console.error("Create Subject:", error);
            if (error.response && error.response.data) {
                alert("เกิดข้อผิดพลาดในการสร้างวิชาเรียน");
            } else {
                alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
            }
        }
    }

    return (
        <div className="space-y-5 w-full">
            <div className="flex justify-end items-center">
                <Link
                    to='/subject'
                    className="inline-flex justify-center gap-2 items-center rounded-sm border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-900 focus:ring-3 focus:outline-hidden"
                >
                    Back
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </Link>
            </div>
            <div className="w-full md:w-3/4 mx-auto p-4 md:p-8 space-y-4 border border-gray-200 rounded-xl">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl text-center">Add Subject Form</h1>
                <form
                    className="space-y-6"
                    onSubmit={handelSubmit}
                >
                    <div className="grid grid-cols-1 gap-1">
                        <label htmlFor="subjectName" className="font-norma text-base tracking-normal">Subject Name</label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-1 px-2 "
                            placeholder="ex. Database Analysis"
                            type="text"
                            id="subjectName"
                            name="subjectName"
                            onChange={handelChange}
                            value={formData.subjectName}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                        <label htmlFor="subjectCode" className="font-norma text-base tracking-normal">Subject Code</label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-1 px-2 "
                            placeholder="ex. cp000001"
                            type="text"
                            id="subjectCode"
                            name="subjectCode"
                            onChange={handelChange}
                            value={formData.subjectCode}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                        <label htmlFor="academicYear" className="font-norma text-base tracking-normal">Academic Year</label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-1 px-2 "
                            placeholder="ex. 2566"
                            type="text"
                            id="academicYear"
                            name="academicYear"
                            onChange={handelChange}
                            value={formData.academicYear}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                        <label htmlFor="term" className="font-norma text-base tracking-normal">Term </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-1 px-2 "
                            placeholder="ex. 1"
                            type="text"
                            id="term"
                            name="term"
                            onChange={handelChange}
                            value={formData.term}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-fit ml-auto cursor-pointer block rounded-sm border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-900 focus:ring-3 focus:outline-hidden"
                    // className="flex gap-2 items-center justify-center cursor-pointer bg-gray-900 font-semibold rounded-full w-full text-white mt-2  mx-auto p-2.5 hover:bg-gray-950 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed "
                    >
                        Create
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg> */}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateSubject;