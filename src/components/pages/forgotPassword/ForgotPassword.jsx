import React from 'react'
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants';

const ForgotPassword = () => {
  return (
    <section>
      <main className="max-w-[95%] mx-auto">
        <div className="text-gray-900 md:w-[60%] lg:w-[40%] m-auto mt-4">
          <h1 className="font-palanquin font-medium text-2xl text-center">
            Reset password
          </h1>
          <p className="font-montserrat text-center mt-8">
            Enter your email address and we’ll send you a link to reset your
            password
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="border w-full h-12 px-4 mt-8 placeholder:text-gray-500 focus-within:outline-none focus:outline-none"
          />
          <button className=" bg-gray-700 text-white font-montserrat w-full  mt-6 p-3 hover:bg-gray-500 transition-all font-medium text-[1.1rem]">
            Continue
          </button>
          <div className='text-center'>
            <div className="border-t mt-12 mb-5"></div>
            <Link to={`/${LOGIN}`} role='button' className='border-b hover:border-gray-900 transition-all'>Back to Log in</Link>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ForgotPassword