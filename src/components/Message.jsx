import React from 'react'

const Message = () => {
    return (
        <div className='message owner'>
            <div className='messageInfo'>
                <img src="" alt="Profile picture" />
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