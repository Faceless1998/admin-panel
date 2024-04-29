import React, { useState } from "react";
import "./WidgetPopup.css";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const WidgetPopup = ({ onClose, onSelectWidget }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWidget = () => {
    setIsOpen(true);
  };

  const handleCloseWidget = () => {
    setIsOpen(false);
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
