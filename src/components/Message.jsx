import React from 'react'

// Import pictures
import emptyProfile from '../img/emptyProfile.png'

const Message = () => {
    return (
        <div className='message owner'>
            <div className='messageInfo'>
                <img src={emptyProfile} alt="Profile picture" />
                <span>Just now</span>
            </div>
            <div className='messageContent'>
                <p>Hello</p>
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture" />
            </div>
        </div>
    )
}

export default Message