import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LANDLORDSLOGINPAGE, LOGIN } from "../../constants";
import { AppleIcon, FaceBookIcon, GoogleIcon, LinkedIn } from '../../../assets/icons';


const Login = () => {

  const [activeButton, setActiveButton] = useState("Guests");


  const btns = [
    {
      id: 1,
      linkPath: `/${LOGIN}`,
      label: "Guest",
      highlight: "guest-highlight",
      borderClass: "rounded-tl-md rounded-bl-md",
    },
    {
      id: 2,
      linkPath: `/${LOGIN}/${LANDLORDSLOGINPAGE}`,
      label: "Supplier",
      highlight: "supplier-highlight",
      borderClass: "rounded-tr-md rounded-br-md",
    },
  ];

 const handleClick = (label) => {
   setActiveButton(label);
  };

  const contactBtns = [
    {
      id: 1,
      src: GoogleIcon,
      alt: "google-icon",
      width: 18,
      height: 18,
      btnLabel: "Continue with Google",
      className: "bg-gray-700 hover:bg-gray-500  text-white",
    },
    {
      id: 2,
      src: LinkedIn,
      alt: "linkedInlogo",
      width: 20,
      height: 20,
      btnLabel: "Continue with LinkedIn",
      className: "bg-gray-700 hover:bg-gray-500 text-white",
    },
    {
      id: 3,
      src: FaceBookIcon,
      alt: "facebooklogo",
      width: 20,
      height: 20,
      btnLabel: "Continue with Facebook",
      className: "bg-gray-700 hover:bg-gray-500 text-white",
    },
    {
      id: 4,
      src: AppleIcon,
      alt: "applelogo",
      width: 20,
      height: 20,
      btnLabel: "Continue with Apple",
      className: "bg-gray-700 hover:bg-gray-500 text-white",
    },
    {
      id: 5,
      btnLabel: "Continue with Email",
      className: "transparent hover:bg-gray-50 hover:text-gray-500 text-gray-700 email-border",
    },
  ];

  return (
    <section className="h-[100vh] border-t">
      <main>
        <div className="flex flex-col lg:flex-row">
          {/* form */}
          <div className="flex-[3]">
            <div className="w-[90%] md:w-[60%] m-auto flex justify-center flex-col mt-6 ">
              <p className="text-center text-gray-600 font-palanquin mb-4">
                Who are you?
              </p>
              <div className=" grid grid-cols-2 rounded-md h-12 items-center">
                {btns.map(({ label, id, linkPath, highlight, borderClass }) => (
                  <Link
                    key={id}
                    to={linkPath}
                    className={`border py-3 font-montserrat font-medium text-gray-900 text-center ${
                      activeButton === label ? `${highlight}` : ""
                    } ${borderClass}`}
                    role="button"
                    onClick={() => handleClick(label)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <p className="mt-8 mb-5 text-center font-montserrat text-gray-900 font-medium text-xl">
                Log in or Sign up
              </p>
              <div className="border-t"></div>
              <p className="my-4 font-palanquin text-gray-600">
                How do you want to continue?
              </p>

              {contactBtns.map(
                ({ id, src, alt, width, height, btnLabel, className }) => (
                  <button
                    key={id}
                    className={`flex ${className} font-montserrat w-full rounded-md mt-3 p-3  transition-all font-medium gap-2 items-center text-[1.1rem] justify-center` }
                  >
                    <img src={src} alt={alt} width={width} height={height} />
                    <p>{btnLabel}</p>
                  </button>
                )
              )}

              {/* <button className="flex bg-gray-700 text-white font-montserrat w-full rounded-md mt-3 p-3 hover:bg-gray-500 transition-all font-medium gap-2 items-center text-[1.1rem] justify-center">
                <img
                  src={GoogleIcon}
                  alt="google-icon"
                  width={18}
                  height={18}
                />
                <p>Continue with Google</p>
              </button>
              <button className="flex bg-gray-700 text-white font-montserrat w-full rounded-md mt-3 p-3 hover:bg-gray-500 transition-all font-medium gap-2 items-center text-[1.1rem] justify-center">
                <img src={LinkedIn} alt="linkedInlogo" width={20} height={20} />
                <p>Continue with LinkedIn</p>
              </button>
              <button className="flex bg-gray-700 text-white font-montserrat w-full rounded-md mt-3 p-3 hover:bg-gray-500 transition-all font-medium gap-2 items-center text-[1.1rem] justify-center">
                <img
                  src={FaceBookIcon}
                  alt="facebooklogo"
                  width={20}
                  height={20}
                />
                <p>Continue with Facebook</p>
              </button>
              <button className="flex bg-gray-700 text-white font-montserrat w-full rounded-md mt-3 p-3 hover:bg-gray-500 transition-all font-medium gap-2 items-center text-[1.1rem] justify-center">
                <img src={AppleIcon} alt="applelogo" width={20} height={20} />
                <p>Continue with Apple</p>
              </button>
              <button className="flex border-[3px] border-bg-gray-700 text-gray-700 font-montserrat w-full rounded-md mt-3 p-3 hover:bg-gray-50 transition-all font-medium gap-2 items-center text-[1.1rem] justify-center">
                <p>Continue with Email</p>
              </button> */}
              <Link className="text-center font-montserrat text-gray-900 my-4">
                Forgot password?
              </Link>
            </div>
          </div>
          {/* description for either landlord or guests */}
          <div className="flex-[4] border-l bg-gray-50">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login
