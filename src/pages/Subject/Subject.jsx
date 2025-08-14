import { Link } from "react-router";

function Subject() {
    return (
        <div className="space-y-5 w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Subject</h1>
                <Link
                    to='create'
                    className="inline-flex justify-center gap-2 items-center rounded-sm border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-900 focus:ring-3 focus:outline-hidden"
                >
                    Add Subject
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900 *:first:sticky *:first:left-0 *:first:bg-white">
                            <th className="px-3 py-2 whitespace-nowrap">Name</th>
                            <th className="px-3 py-2 whitespace-nowrap">DoB</th>
                            <th className="px-3 py-2 whitespace-nowrap">Role</th>
                            <th className="px-3 py-2 whitespace-nowrap">Salary</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr
                            className="*:text-gray-900 *:first:sticky *:first:left-0 *:first:bg-white *:first:font-medium"
                        >
                            <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
                            <td className="px-3 py-2 whitespace-nowrap">04/06/1262</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subject;