import React, { useState } from 'react'
import { icons } from '../../../../assets';

const { CheveronRightIcon, CheveronLeftIcon, CloseIcon } = icons;

const ImageSlider = ({ images, title }) => {

  const [imageIndex, setImageIndex] = useState(null);


  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length-1);
      } else {
          setImageIndex(imageIndex-1)
      }
    } else {
      if (imageIndex === images.length-1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }

  }




  return (
    <section className="w-full flex h-[350px] gap-5">
      {imageIndex !== null && (
        /*full image slider */
        <div className="fixed w-[100vw] h-[100%] top-0 left-0 bg-black bottom-0 flex p-4 z-[100] overflow-hidden">
          <div className="flex-1 cursor-pointer flex justify-center items-center">
            <CheveronLeftIcon
              onClick={() => changeSlide("left")}
              className="text-white-400 hover:text-white h-20 flex items-center justify-center"
            />
          </div>
          <div className="flex-[10] m-auto">
            <img
              src={images[imageIndex]}
              alt="image slideshow"
              className="max-w-full min-h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-1 cursor-pointer flex justify-center items-center">
            <CheveronRightIcon
              onClick={() => changeSlide("right")}
              className="text-white-400 hover:text-white h-20 flex items-center justify-center"
            />
          </div>
          <div
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            <CloseIcon className="text-white-400 text-3xl hover:text-white" />
          </div>
        </div>
      )}

      {/* big image */}
      <div className="flex-[3]">
        <img
          src={images[0]}
          alt={title}
          onClick={() => setImageIndex(0)}
          className="w-full h-full object-cover rounded-md cursor-pointer"
        />
      </div>
      {/* small images */}
      <div className="flex-1 flex justify-between flex-col gap-5">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt="image slide"
            onClick={() => setImageIndex(index + 1)}
            key={index}
            className="w-full h-[100px] object-cover rounded-md cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}

export default ImageSlider