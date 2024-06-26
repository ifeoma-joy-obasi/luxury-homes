import React, { useRef } from 'react'
import { CloseBtnIcon, SearchFilterIcon } from "../../../../../assets/icons/index";

const SearchFilterInput = () => {
   const searchInput = useRef();
  const closeButton = useRef();

   const handleCloseButton = () => {
     searchInput.current.value = "";
   };

   const handleCloseBtnDefaultBehaviour = (e) => {
     e.preventDefault();
  };

  // making the close button to only show when the input is on fucus

  if (searchInput.current && searchInput) {
    searchInput.current.addEventListener("focus", () => {
      if (closeButton.current && closeButton) {
        closeButton.current.style.display = "block";
      }
    });
  }
  if (searchInput.current && searchInput) {
    searchInput.current.addEventListener("focusout", () => {
      if (closeButton.current && closeButton) {
        closeButton.current.style.display = "none";
      }
    });
  }



  return (
    <section className="w-full relative">
      <img
        src={SearchFilterIcon}
        alt="search filter icon"
        width={24}
        className="absolute top-3 left-3 cursor-text"
      />
      <input
        ref={searchInput}
        type="text"
        id="city"
        name="city"
        placeholder="city location"
        className="focus:border-gray-500 focus-within:border-gray-500 p-3 border-[#e0e0e0] border rounded-[5px] text-[0.9rem] focus:outline-none focus-within:outline-none focus-visible:outline-none w-full indent-placeholder"
      />
      <button
        ref={closeButton}
        className="hidden"
        onClick={handleCloseButton}
        onMouseDown={handleCloseBtnDefaultBehaviour}
      >
        <img
          width={25}
          src={CloseBtnIcon}
          alt="close button search filter icon"
          className="absolute top-3 right-3 cursor-pointer"
        />
      </button>
    </section>
  );
}

export default SearchFilterInput;