import React, { useEffect, useState } from "react";
import "./WidgetPopup.css";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import CalendarWidget from "./CalendarWidget";

const WidgetPopup = ({ onClose, onSelectWidget }) => {
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  const storedState = localStorage.getItem("widgetopen");
  if(storedState === "true"){
    setIsOpen(true);
    onSelectWidget(
      <CalendarWidget isOpen={true} onClose={() => setIsOpen(false)}/>
    )
  }
})
const handleOpenWidget = () => {
    setIsOpen(true);
    localStorage.setItem("widgetopen","true");
    onSelectWidget(
      <CalendarWidget isOpen={true} onClose={() => setIsOpen(false)}/>
    );
  };

  const handleCloseWidget = () => {
    setIsOpen(false);
    localStorage.removeItem("widgetopen");
    onSelectWidget(null);
  };

  return (
    <div className="widget-popup-overlay">
      <div className="widget-popup">
        <div className="popup-header">
          <span>Select Widget</span>
          <button onClick={onClose}>close</button>
        </div>
        <div className="popup-body">
          <div className={`widget-option ${isOpen ? "active" : ""}`}>
            calendar
            <div className="buttoner">
              <span className="green" onClick={handleOpenWidget}>
                <FaCheck />
              </span>
              <span className="red" onClick={handleCloseWidget}>
                <MdOutlineClose />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetPopup;
