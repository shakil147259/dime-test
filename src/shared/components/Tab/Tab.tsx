import { twMerge } from "tailwind-merge";
import { TabProps } from "./utils/types";
import { getStyles } from "./utils/styles";
import { IconCheck } from "@tabler/icons-react";

export const Tab = ({
  items: tabItems,
  activeTabId,
  setActiveTabId,
  accessibleTabId,
}: TabProps) => {
  const styles = getStyles();

  const accessibleIcon = <IconCheck size={15} />;

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollItemContainer}>
          {tabItems.map((tab) => {
            const itemAccessible =
              accessibleTabId?.length && tab.id in accessibleTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (setActiveTabId && itemAccessible) setActiveTabId(tab.id);
                }}
                className={twMerge(
                  styles.nonSelectedTabs,
                  activeTabId === tab.id && styles.selectedTab,
                  itemAccessible ? "text-green-600" : ""
                )}
              >
                <span className="mr-2">
                  {itemAccessible ? accessibleIcon : tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
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
