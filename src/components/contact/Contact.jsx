import React from "react";
import "./contact.css";
import logo from "../../assets/logo.jpg"
import phone from "../../assets/phonee.png"
import location from "../../assets/location.png"
import facebook from "../../assets/icons8-facebook-48.png"
import instagram from "../../assets/icons8-instagram-48.png"
const Header = () => {
return ( 
    <section className="contact section" id="contact">
    <div className="contact__grid container grid">
        <div className="contact__img-wrapper">
       <img src={logo} alt="" className="contact__img" /> 
       <h2 className="section__title" data-title="Contact Us"></h2>
       <p className="days">You can find us at 106 Walnut Avenue, Santa Cruz, just
steps away from Pacific Avenue. Convenient parking is available in the two-story garage on Center Street, behind our building
or on the street nearby.</p>
<div className="contact__flex"><img src={phone} alt="" />
<a href="tel:8314572307" >  <p className="days">831 457-2307</p>   </a>
    
</div>
<div className="contact__flex"><img src={phone} alt="" />
<a href="tel:8314572804">  <p className="days">831 457-2804</p>         </a>
   
</div>
<div className="contact__flex"><img src={location} alt="" />

    <p className="days">106 Walnut Avenue  Santa Cruz, CA. 95060</p>
    
</div> 
<div className="social_media">
<a href="https://www.google.com/maps/place/The+Walnut+Avenue+Cafe/@36.9735883,-122.029062,17z/data=!3m2!4b1!5s0x808e4026243327b5:0xc22e0aa2239b6c78!4m6!3m5!1s0x808e40262f5b3dbd:0x3616568395488b09!8m2!3d36.973584!4d-122.0264871!16s%2Fg%2F1tm1qpyj?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
     className="btn"> Open Maps </a>
    
     <a className="social_links" href="https://www.facebook.com/p/The-Walnut-Avenue-Cafe-100063525850841/">
     <img src={facebook} alt="" />
     </a>
     <a className="social_links" href="https://www.instagram.com/walnutavenuecafe/?igsh=MzRlODBiNWFlZA%3D%3D">
        <img src={instagram} alt="" />
     </a>
     </div>
        </div>


        <div className="contact__content">
            <h2 className="section__title">
           Hours of Operation
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
    <p className="days">8:00am - 4:00pm</p>
</div>
         
        </div>
        <h2 className="section__title">Breakfast served all day, lunch after 11:00 am</h2>
        <p className="disclosure">Sorry, we do not accept reservations</p>
        </div>
    </div>
      </section>
)
}
export default Header