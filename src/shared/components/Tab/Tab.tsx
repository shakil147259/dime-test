import {
  IconCheck,
  IconCircle,
  IconCircle1,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Tab = {
  id: number;
  label: string;
  icon: React.ReactNode;
};

const tabs: Tab[] = [
  { id: 1, label: "Basic Info", icon: <IconCheck /> },
  {
    id: 2,
    label: "Insurance",
    icon: <IconDotsCircleHorizontal />,
  },
  { id: 3, label: "Financials", icon: <IconCircle /> },
  { id: 4, label: "Relationship Management", icon: <IconCircle1 /> },
  { id: 5, label: "Insurance Quotes", icon: <IconCircle /> },
  { id: 6, label: "Marketing", icon: <IconCircle /> },
  { id: 7, label: "Legal and Compliance", icon: <IconCircle /> },
];

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="flex flex-col gap-1">
      <div className="px-2 py-2 relative h-[70px] w-full overflow-x-scroll ">
        <div className="absolute flex w-max overflow-x-scroll border-b border-gray-300 group">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={twMerge(
                "flex items-center px-4 py-2 text-gray-500 hover:text-gray-900 transition-all",
                activeTab === tab.id &&
                  "text-green-600 font-semibold border-b-2 border-green-500 hover:text-green-600"
              )}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className=" bg-white border border-gray-200 p-2 rounded-lg">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-gray-800">
                <h2 className="text-xl">{tab.label}</h2>
                <p>Content for {tab.label} will appear here.</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tab;
