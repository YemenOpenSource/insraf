export default function Students({ children }) {
    return (
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
                    {children}
                </tbody>
            </table>
        </div>
    )
}
