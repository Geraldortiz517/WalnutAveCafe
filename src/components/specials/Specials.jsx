import { react } from 'react'
import "./specials.css"
import offer1 from "../../assets/offer-1.jpg"
import webmenu from "../../assets/webmenu.pdf"
const Specials = () => {

  return (
<section className="specials section" id="specials">
<h2 className="section__title" data-title="Walnut Specials">
       Check Our Specials of The Day
        </h2>
        <div className="specials__wrapper">
        <div className="specials__img-wrapper">
            <img src={offer1} alt="" className="specials__img"></img>
        </div>
        <div className="specials__content">
            <h3 className="content__title">Every day We Have a Diferent selection of:</h3>
            <p className='content1'>- Breakfast Special</p>
            <p className='content1'>- Lunch Special</p>
            <p className='content1'>- Sausage of the Day</p>
            <p className='content1'>- Soup of the Day</p>
            <p className='content1'>- Fresh Bake Muffing of The Day</p>

            <p className='content2'>
            Remember to ask your server about our specials, every
            day with diferents and intersting options for making 
            your breakfast a momorable one. 
            </p>
                <a href={webmenu} className="btn" id=''>Check Menu</a>
           </div>
           </div>
</section>
  )
}

export default Specials