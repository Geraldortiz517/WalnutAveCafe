import react from 'react'
import './dogfriendly.css'
import dog from '../../assets/dog.jpg'
import corner from '../../assets/corner.jpg'
import vegan from '../../assets/offer-2.jpg'
function Dogfriendly() {

  return (
    <section className="dogfriendly section" id="dogfriendly">
         <div className="container_dogfriendly">

<div className="container_dogfriendly_row2">
<img className='dogf_img' src={corner} alt="" />
<div className="container_dogfrindtly_text">

</div>
</div>
<div className="container_dogfriendly_row3">

<div className="container_dogfrindtly_text">
<h1>Right Arount the Corner</h1>
<p>
    Conviniently close to the heart of downtown Santa Cruz
</p>
<h1>Sit, Stay, Sip</h1>
<p>Enjoy our dog friendly patio!
</p>
</div>
</div>
<div className="container_dogfriendly_row1">
<img className='dogf_img' src={dog} alt="" />
<div className="container_dogfrindtly_text">

</div>
</div>

         </div>

    </section>
  )
}

export default Dogfriendly
