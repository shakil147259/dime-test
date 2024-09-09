import { twMerge } from "tailwind-merge";
import { TabProps } from "./utils/types";
import { getStyles } from "./utils/styles";

export const Tab = ({
  items: tabItems,
  activeTabId,
  setActiveTabId,
}: TabProps) => {
  const styles = getStyles();

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollItemContainer}>
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={twMerge(
                styles.nonSelectedTabs,
                activeTabId === tab.id && styles.selectedTab
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
            activeTabId === tab.id && (
              <div key={tab.id} className="text-gray-800">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tab;
