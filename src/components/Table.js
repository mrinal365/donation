import React from 'react';

const Table = () => {
    return (
        <div className="relative overflow-x-auto max-w-[400px]">
            <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">

                <tbody>
                    <tr className="bg-[#e4eeff] border-b border-gray-800 border">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Date of birth
                        </th>
                        <td className="px-6 py-4 text-gray-900">
                            Jan 13, 2006
                        </td>

                    </tr>
                    <tr className="bg-[#e4eeff] border-b border-gray-800 border">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                            Place of birth
                        </th>
                        <td className="px-6 py-4 text-gray-900 ">
                            Kfar Vradin, ISR
                        </td>

                    </tr>
                    <tr className="bg-[#e4eeff] border-b border-gray-800 border">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                            Nation
                        </th>
                        <td className="px-6 py-4 flex gap-2 items-center text-gray-900">
                            Israel
                            <img src="https://files.eliteprospects.com/layout/flagsmedium/45.png" />
                        </td>

                    </tr>
                    <tr className="bg-[#e4eeff] border-b border-gray-800 border">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Team
                        </th>
                        <td className="px-6 py-4 text-gray-900">
                        • National Israel Women Team<br/>
                        • #21 OHA Mavericks Gold U22 AA 
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table