import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='border-t'>
      <main className="max-w-[95%] mx-auto">
        <div className="flex flex-col justify-center items-center text-gray-900 min-h-[100vh] text-center">
          <h1 className="text-3xl font-palanquin font-medium mb-4">
            Lost on Your Apartment Hunt?
          </h1>
          <p className="text-xl font-montserrat font-normal mb-6">
            Oops! seems like you're lost on your apartment hunt! Don't
            worry, we're here to help you find your way back home
          </p>
          <Link to="/" role='button' className="bg-gray-700 text-white font-montserrat w-[45%] md:w-[30%] lg:w-[20%] rounded-md mt-3 p-3 hover:bg-gray-500 transition-all font-medium text-[1.2rem] py-4">
            Take me Home
          </Link>
        </div>
      </main>
    </section>
  );
}

export default NotFound