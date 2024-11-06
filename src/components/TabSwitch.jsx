import React, { useState } from "react";

function TabSwitch({ isYearly, setIsYearly }) {
  const [selectedTab, setSelectedTab] = useState("Month");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex border border-main-10 rounded-full overflow-hidden w-80 mt-5">
      <button
        onClick={() => {
          handleTabClick("Month");
          setIsYearly(false);
        }}
        className={`flex-1 py-2 text-center ${
          selectedTab === "Month"
            ? "bg-main-10 text-white"
            : "bg-white text-main-10"
        }`}
      >
        Month
      </button>
      <button
        onClick={() => {
          handleTabClick("Years");
          setIsYearly(true);
        }}
        className={`flex-1 py-2 text-center ${
          selectedTab === "Years"
            ? "bg-main-10 text-white"
            : "bg-white text-main-10"
        }`}
      >
        Years
      </button>
    </div>
  );
}

export default TabSwitch;
