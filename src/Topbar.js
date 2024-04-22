import React from 'react'
import "./topbar.css"

import IMG from "./assets/image.jpeg"

export const Topbar = () => {
const usernames = [
    {
        id:1,
        username: "kakhi",
        image:IMG
    }
]

  return (
    <div className='topbar'>
        <div className='username'>
            <div className='user-image'>
            {usernames.map((user) =>(
                <div key={user.id}>
                    <img src={user.image} alt={user.username} key={user.id} />
                </div>
            ))}
            </div>
            <div className='user-title'>
            {usernames.map((user) =>(
                <div key={user.id}>{user.username}</div>
            ))}
            </div>
        </div>
    </div>
  )
}