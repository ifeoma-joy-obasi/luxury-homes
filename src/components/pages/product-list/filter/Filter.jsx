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
          <label htmlFor="city">Location</label>
          <SearchFilterInput/>
         </div>
      </div>
      <div>
        <div className="flex gap-[1.5em] mt-2 text-gray-800 cursor-pointer font-montserrat">
          <div className="flex gap-4 border rounded-full border-gray-900 w-[18%] py-2 justify-center items-center">
            <img src={FilterIcon} alt="filter icon" width={15} height={15} />
            <p>Filters</p>
          </div>
          <div className="border-r border-[#e0e0e0]"></div>
          <div className="flex gap-4 border rounded-full border-gray-900 w-[18%] py-2 justify-center items-center">
            <p>Price</p>
            <ExpandMoreIcon className="text-xl" />
          </div>
          <div className="flex gap-4 border rounded-full border-gray-900 w-[18%] py-2 justify-center items-center">
            <p>Rooms</p>
            <ExpandMoreIcon className="text-xl" />
          </div>
          <div className="flex gap-2 border rounded-full border-gray-900 w-[18%] py-2 justify-center items-center hover:text-white hover:bg-gray-950 transition-all">
            <SearchIcon className="text-xl" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter