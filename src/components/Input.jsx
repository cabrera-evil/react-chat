import React from 'react'

// Import pictures
import Attach from '../img/attach.png'
import Img from '../img/img.png'

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something...' />
            <div className='send'>
                <img src={Attach} alt="Send" />
                <input type="file" style={{display: 'none'}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt="Attach" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input