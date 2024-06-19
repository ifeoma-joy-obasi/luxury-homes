import React from 'react'
import HeroImage from '../../../assets/images/hero-img.jpg'
import { icons } from "../../../assets";
const { SearchIcon, CloseIcon } = icons;
import { Link } from "react-router-dom";
import { SEARCHPAGE } from '../../constants';

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={HeroImage}
        alt="comfortable living"
        className="rounded-2xl w-full h-[70vh] md:h-[60vh] block"
      />

      <div className="absolute w-[90%] top-[50%] left-[50%] translate ">
        <h1 className="font-palanquin font-bold text-[25px] text-center text-slate-500/80">
          Comfortable living. Monthly stays. Healthy environment
        </h1>
        <p className="text-center font-montserrat text-slate-500/100 mt-2 text-[15px]">
          Move-in ready apartments across 500+ cities
        </p>

        <form className="bg-white rounded-2xl py-4 px-5 mt-5">
          <div className="flex items-center gap-3">
            <SearchIcon className="text-slate-500/100" />
            <Link to={`${SEARCHPAGE}`}>
              <input
                type="search"
                name=""
                id=""
                placeholder="Enter a destination"
                className="outline-none text-[0.9rem] w-full text-slate-500/100 placeholder:text-slate-500"
              />
            </Link>
            {/* <CloseIcon/> */}
          </div>
          <div className="border-[0.5px] border-slate-900/5 mt-3"></div>
          <button className="bg-blue-900/100 text-white font-montserrat w-full rounded-full mt-3 p-3 hover:bg-blue-900/70 transition-all">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero