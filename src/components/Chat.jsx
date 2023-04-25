// Import modules
import React from 'react'
// Import components
import Messages from './Messages'
import Input from './Input'
// Import pictures
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>Username</span>
                <span>Online</span>
                <div className='chatIcons'>
                    <img src={Cam} alt="Camera" />
                    <img src={Add} alt="Add" />
                    <img src={More} alt="More" />
                </div>
            </div>
            <Messages /> 
            <Input />
        </div>
    )
}

export default Chat