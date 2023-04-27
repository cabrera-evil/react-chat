// Import modules
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Evil Chat</span>
            <div className='user'>
                <FaUserCircle />
                <span>Username</span>
                <button>Logout</button>
            </div>
        </div>

    )
}

export default Navbar