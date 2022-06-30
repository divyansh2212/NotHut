import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <footer className="footer">Copyright &copy; {year}</footer>
            </div>
        </>
    )
}

export default Footer