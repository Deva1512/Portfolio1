import React from "react";
import "./navbar.css"

const Navbar =() =>{
    return(
        
        <nav className="nav">
            <p>DEVARAJ.</p>
            <ul>
                <li >
                    <a href='/'>Home</a>
                    </li>
                    <li>
                    <a  href='/skills'>Skills</a>
                    </li>
                    <li>
                    <a href='/projects'>Projects</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
        
    )
   
        
}


export default Navbar