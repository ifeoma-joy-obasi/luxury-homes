import React from 'react'
import HeroImage from '../../../assets/images/hero-img.jpg'

const Hero = () => {
  return (
    <section className="">
      <img
        src={HeroImage}
        alt="comfortable living"
        className="rounded-2xl w-full h-[70vh] md:h-[60vh]"
      />
      
    </section>
  );
}

export default Hero