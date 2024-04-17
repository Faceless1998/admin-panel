import React from "react";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { PiPresentationFill } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { PiChatsFill } from "react-icons/pi";
import { BiSolidBuildings } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "./layout.css"
export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "layout opened" : "layout"}>
      <button onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <ul>
        <li><MdDashboard /> <div> Dashboard </div> </li>
        <li><MdPeopleAlt /> <div> People </div> </li>
        <li><FaClipboardList /> <div> Project </div> </li>
        <li><IoMdCalendar /> <div> Calendar </div> </li>
        <li><PiPresentationFill /> <div> Training </div> </li>
        <li><CgSandClock /> <div> Timesheet </div> </li>
        <li><PiChatsFill /> <div> Reports </div> </li>
        <li><BiSolidBuildings /> <div> Administration </div> </li>
        <li><FaQuestion /> <div> Help </div> </li>
        </ul>
      </div>
    </div>
  );
};
