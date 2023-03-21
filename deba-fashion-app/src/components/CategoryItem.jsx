import { Button } from '@mui/material';
import React from 'react';
import './CategoryItem.css'

const CategoryItem = ({item}) => {
  return (
    <div className='Container_categoryItem'>
      
        <img className="Image_container" src={item.img}  alt="Not Available"/>
        <div className='Info_CategoryItem'>
          <h1 className='Title_CategoryItem'>{item.title}</h1>
          <Button>BUY NOW</Button>
        </div>
      
    </div>
  )
}

export default CategoryItem
