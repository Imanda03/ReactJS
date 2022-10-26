import React from 'react'
import img2 from "../image/herosPhoto.png"

const Hero = () => {
  return (
    <section className='hero'>
        <img src={img2} alt="CollectionPhoto" id="heros-image" />
        <h1 className='heros-h1'>Online Experience</h1>
        <p className='heros-par'>Up to 50% Off from the the World's Best Hotel & Vacation Rental Sites. Compare & Book Now. 
            Incredible Deals on Vacation Rentals, Hotels, B&Bs, Cottages, and more. Book now and Save.
             View Traveler Resources. Read Blog. Instant Search. Millions Of Rentals.</p>
    </section>
  )
}

export default Hero