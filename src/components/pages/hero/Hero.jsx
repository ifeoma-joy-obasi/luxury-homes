import React from 'react'
import HeroImage from '../../../assets/images/hero-img.jpg'
import { icons } from "../../../assets";
const { SearchIcon } = icons;
import { Link } from "react-router-dom";
import { SEARCHPAGE } from '../../constants';

const Hero = () => {

  const heroData = [
    {
      key: 1,
      itemWidth: "w-[30%]",
      label: "Location",
      inputType: "text",
      inputPlaceholder: "Enter a destination...",
      myCustomBorderRightClass: 'my-custom-border-right',
    },
    {
      key: 2,
      itemWidth: "w-[25%]",
      label: "Move in",
      inputType: "text",
      inputPlaceholder: "Add dates",
      myCustomBorderRightClass: "my-custom-border-right",
    },
    {
      key: 2,
      itemWidth: "w-[25%]",
      label: "Move-out",
      inputType: "text",
      inputPlaceholder: "Add dates",
      myCustomBorderRightClass: "my-custom-border-right",
    },
    {
      key: 4,
      itemWidth: "w-[25%]",
      label: "Guests",
      inputType: "text",
      inputPlaceholder: "Add guests",
    },
  ];



  return (
    <section className="relative">
      <img
        src={HeroImage}
        alt="comfortable living"
        className="rounded-2xl w-full h-[70vh] md:h-[60vh] block"
      />

      <div className="absolute w-[90%] top-[50%] left-[50%] translate ">
        <h1 className="font-palanquin font-bold text-[1.59rem] text-center text-gray-950 md:text-[2rem] md:font-[900]">
          Comfortable living. Monthly stays. Healthy environment
        </h1>
        <p className="text-center font-montserrat text-black mt-2 text-[0.95rem] md:text-[1rem] font-[600]">
          Move-in ready apartments across 500+ cities
        </p>

        {/* for small screens */}
        <form className="bg-white/100 rounded-2xl py-4 px-5 mt-5 md:hidden">
          <div className="flex items-center gap-3">
            <SearchIcon className="text-gray-700" />
            <Link to={`${SEARCHPAGE}`}>
              <input
                type="search"
                name=""
                id=""
                placeholder="Enter a destination"
                className="outline-none text-[0.9rem] w-full text-gray-700 placeholder:text-gray-700"
              />
            </Link>
          </div>
          <div className="border-[0.5px] border-gray-700/10 mt-3"></div>
          <button className="bg-gray-700 text-white font-montserrat w-full rounded-full mt-3 p-3 hover:bg-gray-500 transition-all font-medium">
            Search
          </button>
        </form>

        {/* for large screens */}
        <form className="hidden bg-white/100 md:flex items-center w-[85%] rounded-full pr-2 mx-auto mt-4 md:w-[100%] lg:w-[85%] ">
          <div className="flex w-[90%] items-center gap-[4px]">
            {/* maping over data */}

            {heroData.map(
              ({
                label,
                inputPlaceholder,
                inputType,
                itemWidth,
                myCustomBorderRightClass,
                key,
              }) => (
                <div
                  key={key}
                  className={`flex flex-col ${itemWidth} pl-5 hover:ring-1 ring-gray-950 hover:rounded-full py-2 transition-all ${myCustomBorderRightClass} cursor-pointer`}
                >
                  <span className="text-[0.7rem] text-gray-900 font-medium font-palanquin">
                    {label}
                  </span>
                  <input
                    type={inputType}
                    placeholder={inputPlaceholder}
                    className="bg-transparent text-[0.7rem] placeholder:text-gray-500 outline-none focus:outline-none placeholder:font-montserrat"
                  />
                </div>
              )
            )}
          </div>

          <button className="bg-gray-700 text-white font-montserrat rounded-full p-2 hover:bg-gray-500 transition-all flex-2 w-[10%] text-[0.9rem] font-medium md:text-[0.8rem] lg:text-[0.9rem]">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero