import React from 'react'
import HeroImage from '../../../../assets/images/hero-img.jpg'
const { SearchIcon } = icons;
import { icons } from '../../../../assets';

const Hero = () => {

  const heroData = [
    {
      key: 1,
      itemWidth: "w-[25%]",
      label: "Location",
      inputType: "text",
      inputPlaceholder: "Enter a destination...",
      myCustomBorderRightClass: "my-custom-border-right",
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
      key: 3,
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
        <h1 className="font-palanquin min-h-6  text-center  text-[2.1rem] font-bold leading-10 tracking-normal md:text-[2.5rem] lg:min-h-12 text-gray-950">
          Comfortable living. Lavish decor. Healthy environment.
        </h1>
        <p className="mb-12 mt-4 h-8  text-center  text-xl font-normal tracking-normal text-black md:mb-6">
          Move-in ready Residence across 100+ cities
        </p>

        {/* for small screens */}
        <form className="bg-white/100 rounded-2xl py-4 px-5 md:hidden">
          <div className="flex items-center gap-3">
            <SearchIcon className="text-gray-600 text-xl" />
            <div>
              <input
                type="search"
                name=""
                id=""
                placeholder="Enter a destination"
                className="outline-none text-[1.1rem] w-full text-gray-700 placeholder:text-gray-600"
              />
            </div>
          </div>
          <div className="border-[0.5px] border-gray-700/10 mt-3"></div>
          <button className="bg-gray-700 text-white font-montserrat w-full rounded-full mt-3 p-3 hover:bg-gray-500 transition-all font-medium text-[1.1rem]">
            Search
          </button>
        </form>

        {/* for large screens */}
        <form className="hidden bg-white/100 md:flex items-center rounded-full mx-auto md:w-[100%] lg:w-[96%] h-[60px] pr-2">
          <div className="flex md:w-[90%] lg:w-[100%] items-center">
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
                  className={`flex flex-col ${itemWidth} hover:ring-1  ring-gray-950 hover:rounded-full  md:py-4 lg:py-3 md:pl-5 lg:pl-5 transition-all ${myCustomBorderRightClass} cursor-pointer leading-none`}
                >
                  <span className="md:text-[0.8rem] lg:text-[0.9rem] text-gray-900 font-medium font-palanquin">
                    {label}
                  </span>
                  <input
                    type={inputType}
                    placeholder={inputPlaceholder}
                    className="bg-transparent md:text-[0.7rem] lg:text-[0.9rem] placeholder:text-gray-500 outline-none focus:outline-none placeholder:font-montserrat"
                  />
                </div>
              )
            )}
          </div>

          <div className="md:w-[10%]">
            <button className="bg-gray-700 text-white font-montserrat rounded-full p-3 hover:bg-gray-500 transition-all flex-2  md:text-[0.8rem] font-medium lg:text-[1rem] w-[100%]">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero