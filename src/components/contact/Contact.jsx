import React from "react";
import "./contact.css";
import logo from "../../assets/logo.jpg"
import phone from "../../assets/phonee.png"
import location from "../../assets/location.png"
const Header = () => {
return ( 
    <section className="contact section" id="contact">
    <div className="contact__grid container grid">
        <div className="contact__img-wrapper">
       <img src={logo} alt="" className="contact__img" /> 
       <h2 className="section__title" data-title="Contact Us"></h2>
       <p className="days">We are located at 106 Walnut Avenue, Santa Cruz just
off Pacific Avenue. There is ample parking in the two
story parking garage on Center St. behind our building
or on the street.</p>
<div className="contact__flex"><img src={phone} alt="" />
    <p className="days">831 457-2307</p>
</div>
<div className="contact__flex"><img src={phone} alt="" />
    <p className="days">831 457-2804</p>
</div>
<div className="contact__flex"><img src={location} alt="" />
    <p className="days">106 Walnut Avenue  Santa Cruz, CA. 95060</p>
</div>

        </div>
        <div className="contact__content">
            <h2 className="section__title">
           Opening Hours
            </h2>

        <div className="contact__details-grid">
<div className="colum1">
    <p className="days">Monday:</p>
    <p className="days">Tuesday:</p>
    <p className="days">Wednesday:</p>
    <p className="days">Thursday:</p>
    <p className="days">Friday:</p>
    <p className="days">Saturday:</p>
    <p className="days">Sunday:</p>
</div>
<div className="colum2">
    <p className="days">8:00am - 3:00pm</p>
    <p className="days">8:00am - 3:00pm</p>
    <p className="days">8:00am - 3:00pm</p>
    <p className="days">8:00am - 3:00pm</p>
    <p className="days">8:00am - 3:00pm</p>
    <p className="days">8:00am - 4:00pm</p>
    <p className="days">8:00am - 3:00pm</p>
</div>
         
        </div>
        </div>
    </div>
      </section>
)
}
export default Header