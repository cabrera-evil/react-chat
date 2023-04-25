// Import modules
import React from 'react'
// Import components
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar