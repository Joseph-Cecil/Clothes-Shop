import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Container_Navbar">
      <div className="Wrapper_Navbar">
        <div className="left_Navbar">
          <div className="Language_Navbar"> EN </div>
          <div className="SearchContainer_Navbar">
            <input className='Input_Navbar'></input>
            <SearchIcon style={{color: "gray", fontSize:16}}/>
    
          </div>
        </div>
        <div className="center_Navbar"><h1>DEBA.</h1></div>
        <div className="right_Navbar">
        <div className='MenuItem_Navbar'>REGISTER</div>
        <div className='MenuItem_Navbar'>SIGN IN</div>
        <div className='MenuItem_Navbar'>
            <ShoppingCartOutlinedIcon />

        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
