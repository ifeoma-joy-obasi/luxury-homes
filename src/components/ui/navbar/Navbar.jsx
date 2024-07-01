import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { icons } from '../../../assets';
import DropDownMenu from '../dropdownMenu/DropDownMenu'
import { FORLANDLORDSPAGE } from '../../constants';
const { CircledUserIcon, HamburgerMenuIcon } = icons;

const Navbar = () => {

  const [showDropdownmenu, setShowDropdownmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDropDownMenu = () => {
    setShowDropdownmenu(!showDropdownmenu);
    setShowMenu((prev) => !prev)

  };

  return (
    <>
      <nav className="max-w-[95%] mx-auto flex justify-between h-[var(--navbar-height)] items-center w-full ">
        <Link
          to="/"
          className="text-gray-900 font-palanquin h-8  font-bold text-2xl"
        >
          LuxuryHomes
        </Link>

        <div className="flex gap-4 items-center justify-between md:w-60">
          <Link
            to={`${FORLANDLORDSPAGE}`}
            className="hover:border-b text-gray-900 border-gray-900"
          >
            For Landlords
          </Link>
          <div
            onClick={handleDropDownMenu}
            className="h-12 flex gap-4 text-gray-400 items-center cursor-pointer ring-1 ring-slate-900/5  rounded-full px-2 hover:shadow-md"
          >
            <CircledUserIcon className="text-[34px]" />
            <HamburgerMenuIcon className="text-[20px] font-extrabold" />
          </div>
        </div>
      </nav>
      <DropDownMenu showDropdownmenu={showDropdownmenu} showMenu={showMenu} />
    </>
  );
}

export default Navbar