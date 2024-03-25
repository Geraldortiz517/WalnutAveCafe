import React, { useEffect, useState } from "react";
import logo2 from "../../assets/logo2.png"
import menubar from "../../assets/menubar.png"
import "./header.css";

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
const changeHeader =() => {
    if (window.scrollY >= 80){
        setScrollHeader(true)
    }
    else{
        setScrollHeader(false)
    }
};

useEffect(() => {
    window.addEventListener("scroll", changeHeader)
}, []);

return ( 
    <header className={ `${ scrollHeader ? 'scroll-header' : ''} header`}>
        <nav className="nav container">
            <a href="/" className="nav__logo">
                <img src={logo2} alt="" className="nav__logo-img" />
            </a>
            <div className={ `${ showMenu ? 'show-menu' : ''} nav__menu`}>
                <ul className="nav__list"> 
                   <li className="nav__item">
                    <a href="#"onClick={() => setShowMenu (!showMenu)} className="nav__link" id="home1">Home</a>
                   </li>
                   <li className="nav__item">
                    <a href="#about"onClick={() => setShowMenu (!showMenu)} className="nav__link">About</a>
                   </li>
                   <li className="nav__item">
                    <a href="#menu"onClick={() => setShowMenu (!showMenu)} className="nav__link">Menu</a>
                   </li>
                   <li className="nav__item">
                    <a href="#contact"onClick={() => setShowMenu (!showMenu)} className="nav__link">Contact</a>
                   </li>
                   <li className="nav__item">
                    <a href="#gallery" onClick={() => setShowMenu (!showMenu)} className="nav__link">Gallery</a>
                   </li>
                   <li className="nav__item">
                    <a href="#specials" onClick={() => setShowMenu (!showMenu)} className="nav__link">Specials</a>
                   </li>
                   <li className="nav__item">
                    <a href="#testimonials" onClick={() => setShowMenu (!showMenu)} className="nav__link">Testimonials</a>
                   </li>
                        
                
                </ul>
            </div>

          <div className="nav__toggle" onClick={() => setShowMenu (!showMenu)}>
           <img src={menubar} alt="" />
          </div>

        </nav>
    </header>
)
}
export default Header