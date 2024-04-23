"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users", {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Users fetched successfully");
        const data = await response.json();
        setUser(data);
      } else {
        console.log("Something went wrong");
      }
    };

    fetchUsers();
  }, []);

  // pagination

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = user?.data?.slice(firstItemIndex, lastItemIndex);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // download report
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(user.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    const data = new Blob([s2ab(excelBuffer)], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(data, "Report.xlsx");
  };

  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-5">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Dashboard
        </h3>
        <p className="text-gray-600 mt-2">
          Welcome to your Admin Dashboard! This is your one-stop destination for
          tracking all the generous donations made on your website. Stay
          updated, manage effectively, and let&apos;s make a difference
          together.
        </p>
      </div>
      <div className="w-full flex flex-col items-end justify-center space-y-4">
        <h4 className="text-gray-800 text-end text-base font-semibold mt-8">
          Download Report
        </h4>
        <span
          onClick={downloadExcel}
          className="bg-gray-200 p-2 rounded-md shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
        >
          <FiDownload fontSize={25} />
        </span>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone No.</th>
              <th className="py-3 px-6">Pan No.</th>
              <th className="py-3 px-6">
                Amount
                <span className="text-xs text-gray-400 font-normal">
                  {" "}
                  (INR)
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {!user || !user.data || user?.data?.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="animate-pulse flex flex-col  p-2 ">
                    <div className="w-full bg-gray-300 my-1 h-10 rounded-md overflow-hidden"></div>
                    <div className="w-full bg-gray-300 my-1 h-10 rounded-md overflow-hidden"></div>
                    <div className="w-full bg-gray-300 my-1 h-10 rounded-md overflow-hidden"></div>
                    <div className="w-full bg-gray-300 my-1 h-10 rounded-md overflow-hidden"></div>
                  </div>
                </td>
              </tr>
            ) : (
              currentItems?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item?.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item?.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item?.pan}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.amount}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center gap-4 my-2">
        {currentPage > 1 && (
          <button
            onClick={handleClickPrev}
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
          >
            <FaArrowLeft className="inline-block mr-2" /> Prev
          </button>
        )}
        {currentItems?.length === itemsPerPage && (
          <button
            onClick={handleClickNext}
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
          >
            Next <FaArrowRight className="inline-block ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
