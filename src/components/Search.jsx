import React from 'react'

// Import pictures
import emptyProfile from '../img/emptyProfile.png'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder='Search...' />
            </div>
            <div className='userChat'>
                <img src={emptyProfile} alt="No profile picture" />
                <div className='userChatInfo'>
                    <span>Username</span>
                </div>
            </div>
        </div>
    )
}

export default Search