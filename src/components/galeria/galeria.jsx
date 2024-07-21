import { useState } from 'react';
import './galeria.css';
import img1 from '../../assets/gallery-1.jpg';
import img2 from '../../assets/gallery-2.jpg';
import img3 from '../../assets/gallery-3.jpg';
import img4 from '../../assets/gallery-4.jpg';
import img5 from '../../assets/gallery-5.jpg';
import img6 from '../../assets/gallery6.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
function Galeria() {

  return (
  <section className="gallery section" id="gallery">
    <h2  className="section__tittle" id='gall' data-title="Gallery">
        Our Photo Gallery
    </h2>
    <div className="containe">

           
<Swiper
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
loop={true}
slidesPerView={'auto'}
coverflowEffect={
    {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    }
    }
    pagination={{el:'.swiper-pagination',clickable:true}}
    navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true
    }}
    modules={[EffectCoverflow, Pagination, Navigation]}
className="swiper_container">
    <SwiperSlide>
        <img className='gallery-img' src={img1} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img className='gallery-img' src={img2} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img className='gallery-img' src={img3} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img className='gallery-img' src={img4} alt="" />
    </SwiperSlide> 
    <SwiperSlide>
        <img className='gallery-img' src={img5} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img className='gallery-img' src={img6} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img className='gallery-img' src={img6} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img className='gallery-img' src={img6} alt="" />
    </SwiperSlide>
<div className="slider-controler">
    <div className="swiper-button-prev slider-arrow">
        
    </div>
    <div className="swiper-button-next slider-arrow">
        
    </div>
    <div className="swiper-pagination"></div>
</div>

</Swiper>

        </div>

  </section>
  )}
export default Galeria
