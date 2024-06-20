import React from 'react'
import { Link } from "react-router-dom"
import { icons } from '../../../assets';
const { CircledUserIcon, HamburgerMenuIcon } = icons;

const Navbar = () => {
  return (
    <nav className="flex justify-between h-[70px] items-center w-full">
      <Link
        to="/"
        className="text-gray-800 font-palanquin h-10  font-bold text-[18px]"
      >
        LuxuryHomes
      </Link>
      <div className="h-10 flex gap-2 text-gray-400 items-center cursor-pointer ring-1 ring-slate-900/5  rounded-full px-2 hover:shadow-md">
        <CircledUserIcon className="text-[28px]" />
        <HamburgerMenuIcon className="text-[12px] font-extrabold" />
      </div>
    </nav>
  );
}

export default Navbar