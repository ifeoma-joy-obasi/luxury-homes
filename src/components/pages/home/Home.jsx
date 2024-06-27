import React from 'react'
import {
  Hero,
  Carousel,
  Accordion,
  CustomerReviews,
  WorkWithUs,
  Footer,
} from "../../pages/index";

const Home = () => {
  return (
    <section>
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