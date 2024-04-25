import React, { useState } from 'react';
import "./topbar.css";
import { IoIosNotifications } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import IMG from "./assets/image.jpeg";

export const Topbar = () => {
    const [notificationActive, setNotificationActive] = useState(false);

    const toggleNotification = () => {
        console.log("Button clicked"); // Debugging
        setNotificationActive(prevState => !prevState);
    };

    const usernames = [
        {
            id: 1,
            username: "kakhi",
            image: IMG
        }
    ];

    return (
        <div className='topbar'>
            <div className='username'>
                <div className='user-image'>
                    {usernames.map((user) => (
                        <div key={user.id}>
                            <img src={user.image} alt={user.username} />
                        </div>
                    ))}
                </div>
                <div className='user-title'>
                    {usernames.map((user) => (
                        <div key={user.id}>{user.username}</div>
                    ))}
                </div>
            </div>

            <div className='searchbar'>
                <div className='search-icon'></div>
                <input type='text' />
            </div>

            <div className='notification-bar'>
                <button onClick={toggleNotification}>
                    {notificationActive ? (<div><MdNotificationsActive /></div>) : (<IoIosNotifications />)}
                </button>
            </div>
        </div>
    );
};
