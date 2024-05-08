import React, { useState } from 'react';
import RoundGreenButton from './RoundGreenButton';
import WidgetPopup from './WidgetPopup';

const WidgetContainer = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedWidget, setSelectedWidget] = useState(null);

    const togglePopup =()=>{
        setShowPopup(!showPopup);
    }

    const handleSelectWidget = (widget) =>{
        setSelectedWidget(widget);
    }
  return (
    <div>
        <RoundGreenButton onClick={togglePopup} />
        {showPopup && <WidgetPopup  onClose={togglePopup} onSelectWidget={handleSelectWidget} />}
        {selectedWidget}
    </div>
  )
}

export default WidgetContainer