import { react } from 'react';
import "./home.css";
import logo2 from "../../assets/logo2.png"
const Home = () => {

  return (
    <section className='home' id='home'>
        <div className="home__container container">
        
            <div className="home__content">

              <div className="row-container">
                <div className="row1">
                <img id="logo2-img"  src={logo2} alt="" className="home-logo-img"   />
              </div>
              
               <div className="row2">
            <span className="home__subtitle">Welcome to the Walnut Avenue Cafe</span>
              <h1 className="home__title">  
             Santa Cruz's Favorite Breakfast Place since 1994
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