import { react } from 'react';
import "./footer.css";
import logo2 from "../../assets/logo2.png";
const Footer = () => {

  return (
  <section className="footer section" id="footer">
<div className="footer__grid container grid">
    <div className="footer__img-wrapper">
        <img src={logo2} alt="" className="footer__img" />
    </div>
    <div className="footer__content">
        <h2 className="section__title" data-title="Thank you for visiting">
       We're Dedicated to Ensuring You Have a Delightful and Memorable
        Experience Every Time You Join Us;
        </h2>
       
    </div>
</div>
<div className="nav__menu" id='footer__nav'>
                <ul className="nav__list"> 
                   <li className="nav__item">
                    <a href="#" className="nav__link">Home</a>
                   </li>
                   <li className="nav__item">
                    <a href="#about" className="nav__link">About</a>
                   </li>
                   <li className="nav__item">
                    <a href="#menu" className="nav__link">Menu</a>
                   </li>
                   <li className="nav__item">
                    <a href="#contact" className="nav__link">Contact</a>
                   </li>
                   <li className="nav__item">
                    <a href="#specials" className="nav__link">Specials</a>
                   </li>
                   <li className="nav__item">
                    <a href="#testimonials" className="nav__link">Testimonials</a>
                   </li>
                        
                
                </ul>
            </div>
            <div className="copyright">

                <p>&#169;Copyright 2024</p>
                <p className='copy'>Walnut Avenue Cafe</p>
                <p>All Rights Reserved</p>
                </div>
 <p className='disclosure' >Menu items, ingredients and prices may change at any time without notice</p>
           
  </section>
  )
}

export default Footer