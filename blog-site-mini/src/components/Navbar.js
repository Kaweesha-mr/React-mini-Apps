import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>
                    <Link className="navbar-brand" to="/">Home</Link>
                </li>
                <li>
                    <Link  className="navbar-brand"to="/add">Add Blog</Link>
                </li>
                <li>
                    <Link className="navbar-brand" to="/about">About Us</Link>
                </li>
                <li>
                    <Link  className="navbar-brand" to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;