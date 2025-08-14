import { Link, useLocation } from "react-router";
import { useState } from "react";

function Navbar({ logout, userInfo, menuItems }) {
    const location = useLocation();
    const pathName = location.pathname.split('/')[1];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex h-screen flex-col justify-between border-e border-gray-100 bg-white w-[320px]">
                <div className="px-4 py-6">
                    <ul className="space-y-1">
                        {menuItems.length > 0 &&
                            menuItems.map((item) => {
                                if (item.role.includes(userInfo.role)) {
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                to={`/${item.name.toLowerCase()}`}
                                                className={`${
                                                    pathName.toLowerCase() === item.name.toLowerCase()
                                                        ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                                                        : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <div className="flex justify-around items-center gap-2 bg-white p-4">
                        <img
                            alt=""
                            src="catwork.jpg"
                            className="size-10 border border-gray-200 rounded-full object-cover"
                        />
                        <p className="text-xs">
                            <span
                                className="border first-letter:uppercase px-1 border-purple-500 bg-purple-100 text-purple-600 rounded-xs"
                            >
                                {userInfo?.role}
                            </span>
                            <strong className="block font-medium">{userInfo?.name}</strong>
                            <span>{userInfo?.email}</span>
                        </p>
                        <div
                            className="hover:text-red-600 cursor-pointer"
                            onClick={() => logout()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 py-2">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                    {/* Hamburger icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                    </svg>
                </button>
                <span className="font-semibold text-lg capitalize">
                    {pathName || "Home"}
                </span>
                <button onClick={logout} className="p-2 text-red-500 hover:text-red-700">
                    {/* Logout icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </button>
            </div>

            {/* Mobile Slide Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="mb-4 p-2 hover:bg-gray-100 rounded"
                    >
                        Close
                    </button>
                    <ul className="space-y-2">
                        {menuItems.map((item) =>
                            item.role.includes(userInfo.role) ? (
                                <li key={item.name}>
                                    <Link
                                        to={`/${item.name.toLowerCase()}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-2 rounded ${
                                            pathName.toLowerCase() === item.name.toLowerCase()
                                                ? "bg-gray-100 font-medium"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
