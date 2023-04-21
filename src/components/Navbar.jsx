import React from 'react'

// Import pictures
import emptyProfile from '../img/emptyProfile.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Evil Chat</span>
            <div className='user'>
                <img src={emptyProfile} alt="No profile picture" />
                <span>Username</span>
                <button>Logout</button>
            </div>
        </div>

    )
}

export default Navbar