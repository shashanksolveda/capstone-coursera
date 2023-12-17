import React from 'react';
import banner from '../images/banner.webp';
import about from '../images/about.jpg';
import { Button } from 'react-bootstrap';

function Homepage() {

  const bookTable = () => {
    window.location.assign("/booking")
  }

  return (
    <div className='homePage'>
        <section className='banner'>
            <div className='banner-info'>
                <h1>Little Lemon</h1>
                <p>
                    Embark on a culinary odyssey with our Mediterranean delights, where sun-kissed flavors and wholesome ingredients collide. Indulge in the allure of olive oil-infused creations, fresh seafood, and the aromatic richness of coastal cuisines. Experience the essence of the Mediterranean lifestyle on your plate at Little Lemon.
                </p>
                <Button className='btn btn-large' size='md' variant='warning' onClick={bookTable}>Book a table</Button>
            </div>
            <div className='banner-img'>
                <img src={banner} alt='banner-img'/>
            </div>
        </section>
        <section className='about'>
            <div className='about-info'>
                <h1>About</h1>
                <p>
                Meet Mario, the visionary owner of our Mediterranean haven. With a passion for authentic flavors, Mario blends tradition and innovation on every plate. His journey from the sun-kissed shores of Greece to crafting culinary delights is a testament to his dedication to creating an unforgettable dining experience
                </p>
            </div>
            <div className='about-img'>
                <img src={about} alt='about-img' />
            </div>
        </section>
    </div>
  )
}

export default Homepage