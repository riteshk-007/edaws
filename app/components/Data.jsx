import React from "react";
import Image from "next/image";

const IndiaStatesTable = () => {
  const stateData = [
    { state: "Andhra Pradesh", poorChildren: 2.7, unableToAttend: 2.0 },
    { state: "Arunachal Pradesh", poorChildren: 0.3, unableToAttend: 0.2 },
    { state: "Assam", poorChildren: 1.8, unableToAttend: 1.4 },
    { state: "Bihar", poorChildren: 6.8, unableToAttend: 5.2 },
    { state: "Chhattisgarh", poorChildren: 1.4, unableToAttend: 1.1 },
    { state: "Delhi", poorChildren: 0.8, unableToAttend: 0.6 },
    { state: "Goa", poorChildren: 0.1, unableToAttend: 0.1 },
    { state: "Gujarat", poorChildren: 2.6, unableToAttend: 2.0 },
    { state: "Haryana", poorChildren: 1.2, unableToAttend: 0.9 },
    { state: "Himachal Pradesh", poorChildren: 0.3, unableToAttend: 0.2 },
    { state: "Jharkhand", poorChildren: 2.0, unableToAttend: 1.6 },
    { state: "Karnataka", poorChildren: 2.6, unableToAttend: 2.0 },
    { state: "Kerala", poorChildren: 0.7, unableToAttend: 0.6 },
    { state: "Madhya Pradesh", poorChildren: 3.7, unableToAttend: 2.9 },
    { state: "Maharashtra", poorChildren: 3.8, unableToAttend: 2.9 },
    { state: "Manipur", poorChildren: 0.2, unableToAttend: 0.1 },
    { state: "Meghalaya", poorChildren: 0.3, unableToAttend: 0.2 },
    { state: "Mizoram", poorChildren: 0.1, unableToAttend: 0.1 },
    { state: "Nagaland", poorChildren: 0.2, unableToAttend: 0.1 },
    { state: "Odisha", poorChildren: 2.2, unableToAttend: 1.7 },
    { state: "Punjab", poorChildren: 1.0, unableToAttend: 0.7 },
    { state: "Rajasthan", poorChildren: 3.1, unableToAttend: 2.4 },
    { state: "Sikkim", poorChildren: 0.1, unableToAttend: 0.0 },
    { state: "Tamil Nadu", poorChildren: 2.7, unableToAttend: 2.1 },
    { state: "Telangana", poorChildren: 1.7, unableToAttend: 1.3 },
    { state: "Tripura", poorChildren: 0.3, unableToAttend: 0.2 },
    { state: "Uttarakhand", poorChildren: 0.5, unableToAttend: 0.4 },
    { state: "Uttar Pradesh", poorChildren: 9.0, unableToAttend: 6.9 },
    { state: "West Bengal", poorChildren: 3.5, unableToAttend: 2.7 },
  ];

  return (
    <div className="w-full overflow-x-auto relative">
      <h1 className="mb-4 text-white text-xl bg-[#ea793d] p-3 text-center capitalize">
        This table shows the estimated number of poor children and children
        unable to attend school due to poverty in each state of India as of
        2024.
      </h1>
      <table className="w-full table-auto border-collapse">
        <thead className="z-10">
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">No.</th>
            <th className="px-4 py-2 text-left">State</th>
            <th className="px-4 py-2 text-right">
              Poor Children (in millions)
            </th>
            <th className="px-4 py-2 text-right">
              Unable to Attend School (in millions)
            </th>
          </tr>
        </thead>
        <tbody>
          {stateData.map((state, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200`}
            >
              <td className="px-4 py-2 text-left">{index + 1}</td>
              <td className="px-4 py-2 text-left">{state.state}</td>
              <td className="px-4 py-2 text-right">
                {state.poorChildren.toFixed(1)}
              </td>
              <td className="px-4 py-2 text-right">
                {state.unableToAttend.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 w-full lg:w-3/4 h-auto">
        <Image width={2000} height={2000} src="/india.png" alt="India Map" />
      </span>
    </div>
  );
};

export default IndiaStatesTable;
