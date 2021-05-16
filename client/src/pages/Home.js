/*
  This the home page shown to viewer that contains the information about this project.
*/

import React from 'react';
import '../App.css'; 
import { NavLink } from "react-router-dom";

function Home() {
  //all the text shown
  return <>
      <div className="Home">
        <div className="homeText text">
          <h1>Welcome</h1>
          <h2>TO</h2>
          <h4>Deepak's Blog page</h4>
          <h6>DBMS Project</h6> 
          <NavLink to="/blogpage">Read More</NavLink> 
          {/* Navlink is what takes the user from the home page to the blog page(main page) */}
        </div>
      </div>
    </>;
}

export default Home;
