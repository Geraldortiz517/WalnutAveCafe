import react from 'react'
import './dogfriendly.css'
import dog from '../../assets/dog.jpg'
import corner from '../../assets/corner.png'
import vegan from '../../assets/offer-2.jpg'
function Dogfriendly() {

  return (
    <section className="dogfriendly section" id="dogfriendly">
         <div className="container_dogfriendly">

<div className="container_dogfriendly_row2">
<img className='dogf_img' src={corner} alt="" />
<div className="container_dogfrindtly_text">
<h1>Right Arount the Corner</h1>
<p>
    Conviniently close to the heart of downtown Santa Cruz
</p>
</div>
</div>
<div className="container_dogfriendly_row1">
<img className='dogf_img' src={dog} alt="" />
<div className="container_dogfrindtly_text">
<h1>Yes, We Love Pets!!</h1>
<p>Meke sure to check out our doggie menu
</p>
</div>
</div>
<div className="container_dogfriendly_row3">
<img className='dogf_img' src={vegan} alt="" />
<div className="container_dogfrindtly_text">
<h1> We Have Vegan Options!!</h1>
<p>
    Because we know you like a healthy life style
</p>
</div>
</div>
         </div>

    </section>
  )
}

export default Dogfriendly