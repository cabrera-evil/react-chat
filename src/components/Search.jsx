import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder='Search...' />
            </div>
            <div className='userChat'>
                <img src="" alt="Profile picture" />
                <div className='userChatInfo'>
                    <span>Username</span>
                </div>
            </div>
        </div>
    )
}

export default Search