import { react } from 'react';
import "./home.css";
import logo2 from "../../assets/logo2.png"
const Home = () => {

  return (
    <section className='home' id='home'>
        <div className="home__container container">
        
            <div className="home__content">

              <div className="row-container">
               <div className="row2">
            <h1 className="home__subtitle">Welcome to the </h1>
              <h1><strong>Walnut Avenue Cafe</strong></h1>
              <h1 className="home__title">  
             Santa Cruz's Favorite Breakfast And Lunch Place since 1993
             </h1>
           

               </div>
               
              </div>
              
        
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