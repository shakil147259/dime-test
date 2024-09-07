export const getStyles = () => {
  const container = "flex flex-col gap-1";
  const scrollContainer =
    "px-2 py-2 relative h-[70px] w-full overflow-x-scroll";
  const scrollItemContainer =
    "absolute flex w-max overflow-x-scroll border-b border-gray-300";
  const nonSelectedTabs =
    "flex items-center px-4 py-2 text-gray-500 hover:text-gray-900 transition-all";
  const selectedTab =
    "text-green-600 font-semibold border-b-2 border-green-500 hover:text-green-600";

  const tabsContentContainer =
    "bg-white border border-gray-200 px-6 py-8 rounded-lg";
  return {
    container,
    scrollContainer,
    scrollItemContainer,
    selectedTab,
    nonSelectedTabs,
    tabsContentContainer,
  };
};
