import React from "react";
import logo from "./images/pencil.png"

const Header = () => {
    return (
        <div className="header">
            <img alt="img" src={logo} className='header_img' />
            <h1>NotHut</h1>
        </div>
    )
}

export default Header