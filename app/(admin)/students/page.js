
export default function page() {
    return (
        <div className="m-auto p-2 sm:p-6 flex flex-col items-center w-screen justify-center">
            <div className="flex w-full flex-col justify-center p-4">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    {/* Alert */}
                    <div className="p-4 mb-4 text-[#614c19] rounded-lg bg-[#fec63d]">
                        <div className="flex items-center">
                            <h3 className="text-lg font-medium">عرض جميع الطلاب</h3>
                        </div>
                        <div className="mt-2 mb-4 text-sm">
                           عرض جميع الطلاب الموجودين في قاعدة البيانات لجميع المستويات, لتصفح الطلاب وفقاً
                            للإقسام يمكنك الإنتقال لصفحة التصنيفات او الضغط على 
                           القسم الموجود في الجدول
                        </div>
                    </div>
                    {/* Alert */}
                    <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                        {/* section */}
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="البحث عن الطلاب" required="" />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg">
                                        بحث
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-md text-left text-gray-500 font-medium">
                                <thead className="text-md font-regular text-gray-600 border-b text-center">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">اسم الطالب</th>
                                        <th scope="col" className="px-4 py-3">رقم القيد</th>
                                        <th scope="col" className="px-4 py-3">القسم</th>
                                        <th scope="col" className="px-4 py-3">عرض</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Head Start */}
                                    <tr className="border-b text-center">
                                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right">منصور أحمد منصور حيدرة</th>
                                        <td className="px-4 py-3">18600</td>
                                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B5EC</td>
                                        <td className="px-4 py-3">
                                            <button className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Head End */}
                                    {/* Head Start */}
                                    <tr className="border-b text-center">
                                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right">اسامة محمد علي أحمد</th>
                                        <td className="px-4 py-3">18600</td>
                                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B4IT</td>
                                        <td className="px-4 py-3">
                                            <button className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Head End */}
                                    {/* Head Start */}
                                    <tr className="border-b text-center">
                                        <th scope="row" className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap text-right">أحمد محمد علي أحمد</th>
                                        <td className="px-4 py-3">18600</td>
                                        <td className="px-4 py-3 underline text-blue-700 font-bold cursor-pointer">B3E</td>
                                        <td className="px-4 py-3">
                                            <button className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button">
                                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Head End */}
                                </tbody>
                            </table>
                        </div>
                        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
                            {/* sub header */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
