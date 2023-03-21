import { Circle, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import './Product.css'

const Product = ({item}) => {
  return (
    <div className='Container_Product'>
      <Circle className='Circle_Product'/>
      <img className="Image_Product" src={item.img}  alt="Not Available"/>
        <div className='Info_Product'>
            
          <div className='Icon_Product'>
            <ShoppingCartOutlined/>
          </div>

          <div className='Icon_Product'>
            <SearchOutlined/>
          </div>

          <div className='Icon_Product'>
            <FavoriteBorderOutlined/>
          </div>
      </div>
    </div>
  )
}

export default Product
