import React, { useState } from "react"

import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    const {menuOpen, setMenuOpen} = useState(false)
    return (
        <div className="banner">
        <nav>
            <Link to="/" className="title">
                <h1>Delhi High Court</h1>
                </Link>
                
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }

            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/About">History</NavLink>
                </li>
                <li>
                    <NavLink to="/About2">Judges</NavLink>             
                </li>
                <li>
                    <NavLink to="/About">e-Library</NavLink>
                </li>
                <li>
                    <NavLink to="/About">Registrars</NavLink>
                </li>
                <li>
                    <NavLink to="/About">Calender</NavLink>
                </li>
                <li>
                    <NavLink to="/About">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/About">Links</NavLink>
                </li>
            </ul>
            
        </nav>
        </div>
    );
};