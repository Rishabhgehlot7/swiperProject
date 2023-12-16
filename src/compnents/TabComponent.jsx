import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import { useSwipeable } from 'react-swipeable'; // Import the swipeable hook
import FilterComponent from './FilterComponent';

const Tab = ({ label, onClick, isActive }) => {
  return (
    <div
      className={`cursor-pointer text-xl px-3 font-medium py-2 text-white text-center ${
        isActive ? 'border-b-8 border-white' : ' text-gray-700'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const TabContent = ({ activeTab }) => {
  const tabContents = [
    { label: 'Tab 1', content: <FilterComponent /> },
    { label: 'Tab 2', content: <FilterComponent /> },
    { label: 'Tab 3', content: <FilterComponent /> },
  ];

  const activeContent = tabContents.find((tab) => tab.label === activeTab);

  return <div>{activeContent.content}</div>;
};

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  // Use the useSwipeable hook to handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const nextTab =
        activeTab === 'Tab 3' ? 'Tab 1' : `Tab ${parseInt(activeTab.split(' ')[1]) + 1}`;
      setActiveTab(nextTab);
    },
    onSwipedRight: () => {
      const prevTab =
        activeTab === 'Tab 1' ? 'Tab 3' : `Tab ${parseInt(activeTab.split(' ')[1]) - 1}`;
      setActiveTab(prevTab);
    },
  });

  return (
    <div className="w-full h-auto bg-blue-500" {...handlers}>
      <div className="h-auto grid grid-cols-3 items-center mx-auto">
        <Tab
          label="CURRENT"
          onClick={() => handleTabClick('Tab 1')}
          isActive={activeTab === 'Tab 1'}
        />
        <Tab
          label="UPCOMING"
          onClick={() => handleTabClick('Tab 2')}
          isActive={activeTab === 'Tab 2'}
        />
        <Tab
          label="CLOSED"
          onClick={() => handleTabClick('Tab 3')}
          isActive={activeTab === 'Tab 3'}
        />
      </div>
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default TabContainer;
