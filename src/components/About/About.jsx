import { react } from 'react';
import "./about.css";
import front from "../../assets/front.jpeg";
const About = () => {

  return (
  <section className="about section" id="about">
<div className="about__grid container grid">
    <div className="about__img-wrapper">
<img src={front} alt="" className="about__img" />
    </div>
    <div className="about__content">
        <h2 className="section__title" data-title="About Us">
       Fresh Quality And Organic Tasty Breakfast House For You
        </h2>
        <p className="about__description">
            A mainstay in the heart of downtown Santa Cruz, locals have been 
            goin nuts for the popularity of the Walnut Ave Cafe. </p>
        <p>
            Mike Bobadilla started in 2001 as general manager, became an owner 
            in 2014 along side his bussines partner and lead chef Hector de la Torre. 
       </p>
    <div className="about__details grid">
        <p className="about__details-description">
        Amazing food
        </p>
        <p className="about__details-description">
       
        Great location
        </p>
        <p className="about__details-description">
       
        Even better atention 
        </p>
        
    </div>
    <a href="#team" className="btn">Our Experts</a>
    </div>
</div>
  </section>
  )
}

export default About