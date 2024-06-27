import React from 'react'
import {FilterIcon} from '../../../../assets/icons/index'
import { icons } from '../../../../assets';
const { ExpandMoreIcon, SearchIcon } = icons;
import {SearchFilterInput} from "../../../pages/index"

const Filter = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-[300] text-2xl mt-2 font-palanquin">
        Search results for <b>London</b>
      </h1>
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="max-w-max">
            Location
          </label>
          <SearchFilterInput />
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-2 text-gray-800 cursor-pointer font-montserrat">
          <div className="flex gap-2 md:gap-4 border rounded-full border-gray-900 px-3 md:px-4  py-2 justify-center items-center hover:text-gray-500 transition-all hover:border-gray-500">
            <img src={FilterIcon} alt="filter icon" width={15} height={15} />
            <p className="text-[0.9rem] md:text-[1rem]">Filters</p>
          </div>
          <div className="border-r border-[#e0e0e0]"></div>
          <div className="flex gap-2 md:gap-4 border rounded-full border-gray-900 px-3 md:px-4  py-2 justify-center items-center hover:text-gray-500 transition-all hover:border-gray-500">
            <p className="text-[0.9rem] md:text-[1rem]">Price</p>
            <ExpandMoreIcon className="text-[1rem] lg:text-xl" />
          </div>
          <div className="flex gap-2 md:gap-4 border rounded-full border-gray-900 px-3 md:px-4  py-2 justify-center items-center hover:text-gray-500 transition-all hover:border-gray-500">
            <p className="text-[0.9rem] md:text-[1rem]">Rooms</p>
            <ExpandMoreIcon className="text-[1rem] lg:text-xl" />
          </div>
          <div className="flex gap-2 border rounded-full border-gray-900  py-2 px-3 md:px-4 justify-center items-center hover:text-white hover:bg-gray-950 transition-all">
            <SearchIcon className="text-[1rem] lg:text-xl" />
            <button className="text-[0.9rem] md:text-[1rem]">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter