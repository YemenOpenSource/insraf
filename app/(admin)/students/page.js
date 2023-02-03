import React from 'react'

export default function page() {
    return (
        <div className="flow-root bg-white rounded shadow">
            <table>
                <thead>
                    <tr>
                        <th>البريد الإلكتروني</th>
                        <th>اشترك</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>mansour.yemen1@gmail.com</td>
                        <td>منذ عام واحد</td>
                        <td className="flex justify-end space-x-2 space-x-reverse">
                            <button className="small btn-secondary"><span> إلغاء الاشتراك </span></button>
                            <div className="relative inline-block">
                                <span disabled="false" id="headlessui-menu-button-5">
                                    <button className="small btn-secondary">
                                        <span>
                                            <i className="uil uil-ellipsis-h"></i>
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
