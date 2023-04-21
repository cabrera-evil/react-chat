import React from 'react'

// Import pictures
import emptyProfile from '../img/emptyProfile.png'

const Chats = () => {
    return (
        <div className='chats'>
            <div className='userChat'>
                <img src={emptyProfile} alt="No profile picture" />
                <div className='userChatInfo'>
                    <span>Username</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats