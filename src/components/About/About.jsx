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
       welcome to Walnut Avenue Cafe 
        </h2>
        <p className="about__description">
            A beloved santa Cruz staple since 1994! Whether you're 
            craving a delicious breakfast, a satisfying lunch, or a laid-back 
            weekend brunch, we've got you covered. </p>
        <p>
            Nestled in the heart of Downtown Santa Cruz, our cozy spot offers
            both indoor and outdoor seating for the perfect relaxed experience. Stop
            by and taste what's made us a local favorite for over 25 years.  
       </p>
       <p>- We can't wait to serve you!</p>
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

    </div>
</div>
  </section>
  )
}

export default About