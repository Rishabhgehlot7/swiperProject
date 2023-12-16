import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import CardContainer from './CardContainer';

const Tab = ({ label, onClick, isActive }) => {
    return (

        <div
            className={`border-[1px] border-black text-center w-[32%] mx-2 my-2 py-1  text-xl ${isActive ? "bg-gray-800 text-white" : " text-gray-700"}`}
            onClick={onClick}
        >
            {label}
        </div>


    );
};

const TabContent = ({ activeTab }) => {
    const tabContents = [
        { label: 'Tab 1', content: <CardContainer /> },
        { label: 'Tab 2', content: <CardContainer /> },
        { label: 'Tab 3', content: <CardContainer /> },
    ];

    const activeContent = tabContents.find((tab) => tab.label === activeTab);

    return (
        <div className="">
            {/* <h2 className="text-xl font-bold mb-2">{activeContent.label}</h2> */}
            <>{activeContent.content}</>
        </div>
    );
};

const TabContainer = () => {
    const [activeTab, setActiveTab] = useState('Tab 1');

    const handleTabClick = (tabLabel) => {
        setActiveTab(tabLabel);
    };

    return (
        <div className="w-full h-auto bg-gray-200">
            <div className="flex items-center justify-between m-auto w-full">
                <Tab
                    label="ALL"
                    onClick={() => handleTabClick('Tab 1')}
                    isActive={activeTab === 'Tab 1'}
                />
                <Tab
                    label="MAINLINE"
                    onClick={() => handleTabClick('Tab 2')}
                    isActive={activeTab === 'Tab 2'}
                />
                <Tab
                    label="SME"
                    onClick={() => handleTabClick('Tab 3')}
                    isActive={activeTab === 'Tab 3'}
                />
            </div>
            <TabContent activeTab={activeTab} />
        </div>
    );
};

export default TabContainer;
