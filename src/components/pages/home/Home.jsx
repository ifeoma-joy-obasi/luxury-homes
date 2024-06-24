import React from 'react'
import {
  Hero,
  Carousel,
  Navbar,
  Accordion,
  CustomerReviews,
  WorkWithUs,
  Footer,
} from "../../pages/index";

const Home = () => {
  return (
    <section>
      <Navbar />
      <main className="max-w-[95%] mx-auto">
        <Hero />
        <section className="mt-20">
          <Carousel />
        </section>

        <section className="mt-20">
          <Accordion />
        </section>

        <section className="mt-20">
          <CustomerReviews />
        </section>

        <section className="mt-20">
          <WorkWithUs />
        </section>
      </main>

      <footer className="mt-20">
        <Footer />
      </footer>
    </section>
  );
}

export default Home