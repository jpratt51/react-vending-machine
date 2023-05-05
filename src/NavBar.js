import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/vending-machine">
                Vending Machine
            </NavLink>
            <NavLink exact to="/pretzels">
                Pretzel Pieces
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/skittles">
                Skittles
            </NavLink>
        </nav>
    );
}

export default NavBar;
