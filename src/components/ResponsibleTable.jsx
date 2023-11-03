import React from "react";

const ResponsiveTable = () => {
  // Sample data for the table
  const tableData = [
    {
      name: "Item 1",
      type: "Type A",
      duration: "2 hours",
      dateCreated: "2023-01-15",
      lastUpdated: "2023-02-20",
      action: "Download",
    },
    {
      name: "Item 2",
      type: "Type B",
      duration: "3 hours",
      dateCreated: "2023-02-10",
      lastUpdated: "2023-03-25",
      action: "Download",
    },
    {
      name: "Item 3",
      type: "Type A",
      duration: "1 hour",
      dateCreated: "2023-03-05",
      lastUpdated: "2023-04-15",
      action: "Download",
    },
    {
      name: "Item 4",
      type: "Type C",
      duration: "4 hours",
      dateCreated: "2023-04-20",
      lastUpdated: "2023-05-30",
      action: "Download",
    },
    {
      name: "Item 5",
      type: "Type C",
      duration: "5 hours",
      dateCreated: "2023-04-20",
      lastUpdated: "2023-05-30",
      action: "Download",
    },
    {
      name: "Item 6",
      type: "Type C",
      duration: "6 hours",
      dateCreated: "2023-04-20",
      lastUpdated: "2023-05-30",
      action: "Download",
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-[#EBF3FF] text-gray-600">
          <tr>
            <th className="p-2 xxs:text-[0.5rem] sm:text-sm md:text-base">
              Name
            </th>
            <th className="p-2 xxs:text-[0.5rem] sm:text-sm md:text-base">
              Type
            </th>
            <th className="p-2 xxs:text-[0.5rem] sm:text-sm md:text-base">
              Duration
            </th>
            <th className="p-2 xxs:text-[0.5rem] sm:text-xs md:text-base">
              Date Created
            </th>
            <th className="p-2 xxs:text-[0.5rem] sm:text-xs md:text-base">
              Last Updated
            </th>
            <th className="p-2 xxs:text-[0.5rem] sm:text-sm md:text-base">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="pt-8 pl-1 xxs:text-[0.5rem] text-xs whitespace-nowrap md:text-base ">
                {item.name}
              </td>
              <td className="pt-8 pl-1 xxs:text-[0.5rem] text-xs whitespace-nowrap md:text-base ">
                {item.type}
              </td>
              <td className="pt-8 pl-1 xxs:text-[0.5rem] text-xs whitespace-nowrap md:text-base ">
                {item.duration}
              </td>
              <td className="pt-8 pl-1 xxs:text-[0.5rem] text-xs whitespace-nowrap md:text-base ">
                {item.dateCreated}
              </td>
              <td className="pt-8 pl-1 xxs:text-[0.5rem] text-xs whitespace-nowrap md:text-base ">
                {item.lastUpdated}
              </td>
              <td className="pl-1 pt-8 whitespace-nowrap md:text-base xxs:text-[0.5rem] text-xs text-[#0048AD]">
                <p className="cursor-pointer">{item.action}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
