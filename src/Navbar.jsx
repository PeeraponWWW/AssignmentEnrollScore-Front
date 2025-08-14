import { Link, useLocation } from "react-router";

function Navbar({
    logout,
    userInfo,
    menuItems,
}) {
    const location = useLocation();
    const pathName = location.pathname.split('/')[1];
    return (
        <>
            <div className="hidden md:flex h-screen flex-col justify-between border-e border-gray-100 bg-white w-[320px]">
                <div className="px-4 py-6">
                    <ul className="space-y-1">
                        {menuItems.length > 0 && menuItems.map((item, index) => {
                            if (item.role.includes(userInfo.role)) {
                                // console.log(pathName === item.name);
                                return (
                                    <li key={item.name}>
                                        <Link to={`/${item.name.toLowerCase()}`} className={`
                                        ${pathName.toLowerCase() === item.name.toLowerCase() ? 'block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700' : '  block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'}
                                         
                                    `}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            }
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
                                className={`border first-letter:uppercase px-1 ${userInfo.role === 'teacher' ? ' border-purple-500 bg-purple-100 text-purple-600 rounded-xs' : 'border-green-500 bg-green-100 text-green-600 rounded-xs'}`}
                            >{userInfo && userInfo.role}</span>
                            <strong className="block font-medium">{userInfo && userInfo.name}</strong>
                            <span> {userInfo && userInfo.email} </span>
                        </p>
                        <div className="hover:text-red-600 cursor-pointer" onClick={() => logout()}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </>

    );
};

export default Navbar;