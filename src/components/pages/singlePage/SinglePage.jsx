import React from 'react'
import { icons } from '../../../assets';
import { Link } from 'react-router-dom';
import { PRODUCTLIST } from '../../constants';
import { ImageSlider } from "../index"
import {singlePostData} from "../../lib/Data"

const { BackArrowIcon, ShareIcon, SaveIcon, LocationPinIcon } = icons;

const SinglePage = () => {
  return (
    <section>
      <main className="max-w-[95%] mx-auto h-full overflow-hidden ">
        <div className="font-montserrat text-gray-900 flex justify-between">
          <Link
            to={`/${PRODUCTLIST}`}
            className="flex items-center border h-12 px-4 gap-4 rounded-full border-gray-900 font-medium font-montserrat hover:border-gray-500 transition-all hover:text-gray-500"
          >
            <BackArrowIcon className="text-xl" />
            Back
          </Link>
          <div className="flex gap-4">
            <button className="flex items-center border h-12 px-4 gap-4 rounded-full border-gray-900 font-medium font-montserrat hover:border-gray-500 transition-all hover:text-gray-500">
              <ShareIcon className="text-xl" /> Save
            </button>
            <button className="flex items-center border h-12 px-4 gap-4 rounded-full border-gray-900 font-medium font-montserrat hover:border-gray-500 transition-all hover:text-gray-500">
              <SaveIcon className="text-xl" /> Share
            </button>
          </div>
        </div>

        {/* about product */}
        <div className="flex h-full overflow-hidden mt-[20px]">
          {/* product details */}
          <div className="flex-[3]">
            {/* wrapper */}
            <div className="pr-[50px]">
              <ImageSlider
                images={singlePostData.images}
                title={singlePostData.title}
              />
              {/* info */}
              <div className="mt-[50px]">
                <div className="flex flex-col gap-5 font-montserrat text-gray-900">
                  <h1 className="font-palanquin text-2xl">
                    {singlePostData.title}
                  </h1>
                  <div className="flex gap-1 items-center text-gray-600">
                    <LocationPinIcon />
                    <span>{singlePostData.address}</span>
                  </div>
                  <p className="text-xl ">$ {singlePostData.price}</p>
                </div>
              </div>

              <div className="mt-[30px]">
                <h2>About This Property</h2>
                <p className="mt-[20px] mb-8 text-gray-600 leading-5">
                  {singlePostData.description}
                </p>
              </div>
            </div>
          </div>
          {/* product features */}
          <div className="flex-[2] bg-yello">
            {/* wrapper */}
            <div className="px-5 py-0">
              
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SinglePage