import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { TabProps } from "./utils/types";
import { getStyles } from "./utils/styles";

export const Tab = ({ items: tabItems }: TabProps) => {
  const [activeTab, setActiveTab] = useState(2);
  const styles = getStyles();

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollItemContainer}>
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={twMerge(
                styles.nonSelectedTabs,
                activeTab === tab.id && styles.selectedTab
              )}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.tabsContentContainer}>
        {tabItems.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-gray-800">
                {tab.content}
                {/* <h2 className="text-xl">{tab.label}</h2>
                <p>Content for {tab.label} will appear here.</p> */}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tab;
