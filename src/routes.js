import React from "react";
import { NavLink } from 'react-router-dom'; 

const Routes = () => {
  return (
    <div>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Routes;