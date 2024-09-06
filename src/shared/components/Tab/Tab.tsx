import {
  IconCheck,
  IconCircle,
  IconCircle1,
  IconUser,
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
  { id: 2, label: "Insurance", icon: <IconUser /> },
  { id: 3, label: "Financials", icon: <IconCircle /> },
  { id: 4, label: "Relationship Management", icon: <IconCircle1 /> },
  { id: 5, label: "Insurance Quotes", icon: <IconCircle /> },
  { id: 6, label: "Marketing", icon: <IconCircle /> },
  { id: 7, label: "Legal and Compliance", icon: <IconCircle /> },
];

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="bg-gray-50 px-4 py-2">
      <div className="inline-flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={twMerge(
              "flex items-center px-4 py-2 text-gray-500 hover:text-gray-900 transition-all",
              activeTab === tab.id &&
                "text-green-600 font-semibold border-b-2 border-green-500"
            )}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-4">
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
