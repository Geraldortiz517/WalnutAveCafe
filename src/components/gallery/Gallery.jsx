import { useState } from 'react'
import './gallery.css'
import { gallery } from '../../Data';
function Gallery() {

  return (
  <section className="gallery section" id="gallery">
    <h2 className="section__tittle" id='gall' data-title="Gallery">
        Our Photo Gallery
    </h2>
    <div className="gallery__grid container grid">
{gallery.map(({img, title}, index)=>{
    return(
        <div className="gallery__item" key={index}>
            <img src={img} alt="" className="gallery__img" />
            <a href="/" className="gallery__icon">+</a>
            <h3 className="gallery__title">{title}</h3>

        </div>
    )
})}
    </div>
  </section>
  )
}

export default Gallery
