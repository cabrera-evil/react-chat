// Import modules
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Evil Chat</span>
            <div className='user'>
                <img src="" alt="Profile picture" />
                <span>Username</span>
                <button>Logout</button>
            </div>
        </div>

    )
}

export default Navbar