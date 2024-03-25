import { react } from 'react';
import "./home.css";

const Home = () => {

  return (
    <section className='home' id='home'>
        <div className="home__container container">
            <div className="home__content">
                <span className="home__subtitle">Welcome to the Walnut Avenue Cafe</span>
           <h1 className="home__title">  
           Santa Cruz's Favorite Breakfast Place since 1994
           </h1>
           <p className="home__description">
           Since opening, Walnut has been known 
           as a go-to spot for locals and visitors
           offering the perfect brunch menu, 
           hitting every possible desire 
           for fans of a good old-fashioned savory breakfast.
           </p>
           <div className="home__btns">
             <a href="#menu" className="btn"> Check Menu </a>
             <a href="#contact" className="btn" id='btn1'>Contact Us</a>
           </div>
            </div>
        </div>
    </section>
  )
}

export default Home