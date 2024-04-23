import React from "react";

const Dashboard = () => {
  const tableItems = [
    {
      name: "Ritesh",
      email: "test@gmail.com",
      phone: "1234567890",
      pan: "ABCD1234E",
      amount: "$100",
    },
  ];

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
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone No.</th>
              <th className="py-3 px-6">Pan No.</th>
              <th className="py-3 px-6">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.pan}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
