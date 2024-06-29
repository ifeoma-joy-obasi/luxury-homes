import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LANDLORDSLOGINPAGE, LOGIN } from "../../constants";

const Login = () => {
  return (
    <section className="h-[100vh] border-t">
      <main className="max-w-[95%] mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* form */}
          <div className="flex-[3] ">
            <p>Who are you?</p>
            <div className=" grid grid-cols-2 rounded-md h-12 items-center">
              <Link to={`/${LOGIN}`} className="border" role='button'>
                Guests
              </Link>
              <Link to={`/${LOGIN}/${LANDLORDSLOGINPAGE}`} className="border" role="button">
              Supplier
              </Link>
            </div>
            <p className="mt-4 mb-5">Log in or Sign up</p>
            <div className="border-t"></div>
            <p className="my-4">How do you want to continue?</p>
            <button className="flex">
              icon
              <p>Continue with Google</p>
            </button>
            <button className="flex">
              icon
              <p>Continue with LinkedIn</p>
            </button>
            <button className="flex">
              icon
              <p>Continue with Facebook</p>
            </button>
            <button className="flex">
              icon
              <p>Continue with Email</p>
            </button>
          </div>
          {/* description for either landlord or guests */}
          <div className="flex-[4]">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login