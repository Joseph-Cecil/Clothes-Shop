import React from 'react';
import {sliderItems} from "../data.js"
import './Slider.css'

const Slider = () => {
  return (
       <div className="Container_Slider">
      <div className="Wrapper">
        {sliderItems.map((item) => (
          <div className="Slide_Slider">
            <div className="ImgContainer_Slider">
              <img src={item.img} alt="not available" />
            </div>
            <div className="InfoContainer_Slider">
              <h1 className="Title_Slider">{item.title}</h1>
              <p className="Desc_Slider">{item.desc}</p>
              <button className="Button_Slider">VIEW MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
