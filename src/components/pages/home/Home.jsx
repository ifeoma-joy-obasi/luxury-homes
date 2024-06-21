import React from 'react'
import Hero from '../hero/Hero'
import Navbar from '../../ui/navbar/Navbar'

const Home = () => {
  return (
    <section className='dark'>
      <Navbar/>
      <main className="max-w-[95%] mx-auto">
        <Hero />
      </main>
    </section>
  );
}

export default Home