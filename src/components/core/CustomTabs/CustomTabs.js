import React, { useState } from 'react';
import './CustomTabs.css'; 

const CustomTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        {tabsData.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link mx-3 ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-3">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;

// const headers = [
//     { key: "Lanes", label: "Lanes", textAlign: "center" },
//     { key: "User", label: "User", textAlign: "left" },
//     { key: "Date", label: "date", textAlign: "left" },
//     { key: "LoginTime", label: "Login Time", textAlign: "left" },
//     { key: "LogoutTime", label: "Logout Time", textAlign: "left" },
//     { key: "ActionPerformed", label: "Action Performed", textAlign: "left" },
//     { key: "Timestamp", label: "Timestamp", textAlign: "left" },
//   ];
// const rows = [
//     {
//       Lanes: "Lane 1",
//       User: "Jenn Kaine",
//       Date: "12/06/2023",
//       LoginTime: "06:00",
//       LogoutTime: "10:30",
//       ActionPerformed: "Updated Lane Scheduler",
//       Timestamp: "09:00:13",
//       rowType:""
//     },
//     {
//       Lanes: "Lane 2",
//       User: "Elene Paul",
//       Date: "13/06/2023",
//       LoginTime: "07:00",
//       LogoutTime: "10:30",
//       ActionPerformed: "Turned Off Lane",
//       Timestamp: "09:00:13",
//       rowType:"error"
//     },
//     {
//       Lanes: "Lane 3",
//       User: "MollyCastro",
//       Date: "14/06/2023",
//       LoginTime: "08:00",
//       LogoutTime: "10:30",
//       ActionPerformed: "Created New Schedule for Lane",
//       Timestamp: "09:00:13",
//       rowType:""
//     },
//     {
//       Lanes: "Lane 4",
//       User: "Loreo chain",
//       Date: "15/06/2023",
//       LoginTime: "09:00",
//       LogoutTime: "10:30",
//       ActionPerformed: "Stopped Lane",
//       Timestamp: "09:00:13",
//       rowType:""
//     },
//     {
//       Lanes: "Lane 5",
//       User: "Kaine Jenn",
//       Date: "12/06/2023",
//       LoginTime: "06:00",
//       LogoutTime: "10:30",
//       ActionPerformed: "Updated Lane Scheduler",
//       Timestamp: "09:00:13",
//       rowType:""
//     },
//   ];
// const tableClass="";
//   const headerClass="header-blue fw-normal";
//   const cardClass="p-1 border-0 rounded-0";
//   const tabsData = [
//     { id: 1, title: 'User Events', content: <CustomDataTable cardClass={cardClass} tableClass={tableClass} headerStyles={headerClass} headers={headers} rows={rows} />},
//     { id: 2, title: 'Device Events', content: 'Content for Tab 2' },
//     { id: 3, title: 'Exception / Error Events', content: 'Content for Tab 3' },
//   ];
// <CustomTabs  tabsData={tabsData} />
