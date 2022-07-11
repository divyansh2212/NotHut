import React from "react";
import logo from "./images/pencil.png"

const Header = () => {
    return (
        <nav class="navbar-expand-lg">
            <div className="container-fluid header">
                <img alt="img" src={logo} className='header_img' />
                <h1>NotHut</h1>
            </div>
        </nav>
    )
}

export default Header