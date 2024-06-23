import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants/index'
import { icons } from '../../../assets';
const { CloseIcon } = icons;


const DropDownMenu = ({ showDropdownmenu, showMenu }) => {
  const dropdownmenuRef = useRef(null);
  const closeMenuRef = useRef(null);

  // closing the dropDownMenu when you click outside of the menu
  useEffect(() => {
    const handleClosedropdownMenu = (e) => {
      if (
        dropdownmenuRef.current &&
        !dropdownmenuRef.current.contains(e.target)
      ) {
        dropdownmenuRef.current.classList.add(
          "close-dropdown-menu-onoutsideclick"
        );
        return;
      }
    };

    document.addEventListener("mousedown", handleClosedropdownMenu);

    return () => {
      document.removeEventListener("mousedown", handleClosedropdownMenu);
    };
  });

  // to close menu for smaller and medium screens when the closeIconBtn is clicked

  const handleCloseMenu = () => {
    if (closeMenuRef && closeMenuRef.current) {
      closeMenuRef.current.classList.add("close-menu");
    }

  };

  return (
    <section>
      {/* for large screens */}
      <ul
        ref={dropdownmenuRef}
        className={`drop-down-menu-lg box-shadow-dropdownmenu ${
          showDropdownmenu ? "show-dropdown-menu" : "hide-dropdown-menu"
        }`}
      >
        <Link to={`${LOGIN}`}>
          <li className="p-5 hover:bg-gray-100/70 hover:text-gray-600">
            Login
          </li>
        </Link>

        <Link>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600">
            Register
          </li>
        </Link>

        <Link>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600">
            Whishlishts
          </li>
        </Link>

        <div className="hover:bg-slate-100 border border-b-gray-950/5"></div>

        <Link>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600">Help</li>
        </Link>
      </ul>

      {/* for small screens */}
      <ul
        className={`drop-down-menu-sm box-shadow-dropdownmenu ${
          showMenu ? "show-menu" : "close-menu"
        }`}
        ref={closeMenuRef}
      >
        <button onClick={handleCloseMenu}>
          <CloseIcon className="text-xl mb-3 float-end mr-2" />
        </button>

        <div className="hover:bg-slate-100 border border-b-gray-950/5"></div>

        <Link to={`${LOGIN}`}>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600 mt-5">
            Login
          </li>
        </Link>

        <Link>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600">
            Register
          </li>
        </Link>

        <Link>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600">
            Whishlishts
          </li>
        </Link>

        <div className="hover:bg-slate-100 border border-b-gray-950/5"></div>

        <Link>
          <li className="p-3 hover:bg-gray-100/70 hover:text-gray-600">Help</li>
        </Link>
      </ul>

    </section>
  );
};

export default DropDownMenu
