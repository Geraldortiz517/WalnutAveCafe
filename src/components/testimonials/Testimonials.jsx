import react from 'react'
import './testimonials.css'
import { testimonials } from '../../Data'
function Testimonials() {

  return (
    <section className="testimonials container section" id="testimonials">
         <h2 className="section__title" data-title="Testimonials">
        What Criticts Say
        </h2>
        <div className="testimonials__grid container grid">
{testimonials.map(({img, title, service, link, description}, index)=>{
    return(
        <div className="testimonials__item" key={index}>

            <p className="testimonials__description">{description}</p>
            <div className="botton__wrapper">
                <div className="testimonials__img-wrapper">
             <img src={img} alt="" className="testimonials__img" />
             </div>
             <div className="bottom__sub-wrapper">
              <h3 className="testimonials__title">{title}</h3> 
              <p className="subtitle">{service}</p>
              <a href={link} className="btn">Read Article</a>
             </div>
            </div>
        </div>
    )
})}
    </div>
    </section>
  )
}

export default Testimonials