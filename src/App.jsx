import React from 'react'
import { Hero } from './components/pages';
import Navbar from './components/ui/navbar/Navbar';


const App = () => {
  return (
    <main className="max-w-[95%] mx-auto">

      <Navbar />

      <section>
        <Hero/>
      </section>
      
    </main>
  );
}

export default App