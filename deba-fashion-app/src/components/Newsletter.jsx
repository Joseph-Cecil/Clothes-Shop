import React from 'react';
import './Newsletter.css';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className='Container_Newsletter'>
        <h1 className='Title_Newsletter'>NewsLetter</h1>
        <div className='Description_Newsletter'>Get Instant Updates From Your Favorite Products</div>
        <div className='Input_Newsletter'>
            <input placeholder='Enter Your Email Address'/>
            <button className='button'>
                <SendIcon/>
            </button>

        </div>
      
    </div>
  )
}

export default Newsletter
