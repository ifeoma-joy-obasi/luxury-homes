import React from 'react'
import { icons } from '../../../assets';
import { Link } from 'react-router-dom';
import { PRODUCTLIST } from '../../constants';
import { ImageSlider, Map } from "../index"
import {singlePostData} from "../../lib/Data"

const {
  BackArrowIcon,
  ShareIcon,
  SaveIcon,
  LocationPinIcon,
  PrivacyIcon,
  ModernIcon,
  ElevatorIcon,
  BalconyIcon,
  WifiIcon,
  TowelIcon,
  CleaningIcon,
  BusStopIcon,
  SchoolIcon,
  ShoppingMallIcon,
  SponsoredIcon,
} = icons;

const SinglePage = () => {


  return (
    <section>
      <main className="max-w-[95%] mx-auto h-full overflow-hidden">
        <div className="font-montserrat text-gray-900 flex justify-between">
          <Link
            to={`/${PRODUCTLIST}`}
            className="flex px-2 gap-3 text-[0.9rem] md:text-[1rem] items-center border h-12 md:px-4 md:gap-4 rounded-full border-gray-900 font-medium font-montserrat hover:border-gray-500 transition-all hover:text-gray-500"
          >
            <BackArrowIcon className="md:text-xl" />
            Back
          </Link>
          <div className="flex gap-4">
            <button className="flex px-2 gap-3 text-[0.9rem] md:text-[1rem] items-center border h-12 md:px-4 md:gap-4 rounded-full border-gray-900 font-medium font-montserrat hover:border-gray-500 transition-all hover:text-gray-500">
              <ShareIcon className="md:text-xl" /> Save
            </button>
            <button className="flex px-2 gap-3 text-[0.9rem] md:text-[1rem] items-center border h-12 md:px-4 md:gap-4 rounded-full border-gray-900 font-medium font-montserrat hover:border-gray-500 transition-all hover:text-gray-500">
              <SaveIcon className="md:text-xl" /> Share
            </button>
          </div>
        </div>

        {/* about product */}
        <div className="flex flex-col gap-5 h-full overflow-hidden mt-[20px] lg:flex-row">
          {/* product details */}
          <div className="flex-[3]">
            {/* wrapper */}
            <div className="lg:pr-[50px]">
              <ImageSlider
                images={singlePostData.images}
                title={singlePostData.title}
              />
              {/* info */}
              <div className="mt-[50px]">
                <div className="flex flex-col gap-5 font-montserrat text-gray-900">
                  <h1 className="font-palanquin text-2xl font-medium">
                    {singlePostData.title}
                  </h1>
                  <div className="flex gap-1 items-center text-gray-600 font-montserrat">
                    <LocationPinIcon />
                    <span>{singlePostData.address}</span>
                  </div>
                  <div className='font-montserrat flex justify-between w-[80%]'>
                    <p>
                      <span className="font-medium">{singlePostData.bed}</span>{" "}
                      {singlePostData.bed > 1 ? "beds" : "bed"}
                    </p>
                    <p>
                      <span className="font-medium">
                        {singlePostData.bathroom}
                      </span>{" "}
                      {singlePostData.bathroom > 1 ? "bathrooms" : "bathroom"}
                    </p>
                    <p>
                      <span className="font-medium">{singlePostData.guest}</span>{" "}
                      {singlePostData.guest > 1 ? "guests" : "guest"}
                    </p>
                    <p>
                      <span className='font-medium'>{singlePostData.ft}</span> ft<sup>2</sup>
                    </p>
                  </div>
                  <p className="text-xl font-montserrat font-medium">
                    $ {singlePostData.price}
                  </p>
                </div>
              </div>

              <div className="mt-[30px] text-gray-600">
                <h2 className="text-gray-700 font-medium text-xl font-palanquin">
                  About This Property
                </h2>
                <p className="mt-[20px] text-gray-600 leading-5 font-montserrat">
                  {singlePostData.description}
                </p>
              </div>
            </div>
          </div>
          {/* product features */}
          <div className="flex-[2] bg-primary">
            {/* wrapper */}
            <div className="px-5 py-0 flex flex-col gap-5">
              <p className="font-palanquin text-gray-700 font-medium">
                Features
              </p>
              <div className="flex justify-between py-5 px-[10px] bg-white rounded-md text-gray-600">
                <div className="flex items-center gap-4">
                  <PrivacyIcon className="text-2xl text-light-orangy" />
                  <p>Privacy</p>
                </div>
                <div className="flex items-center gap-4">
                  <ModernIcon className="text-2xl text-light-orangy" />
                  <p>City view</p>
                </div>
                <div className="flex items-center gap-4">
                  <ElevatorIcon className="text-2xl text-light-orangy" />
                  <p>Elevator</p>
                </div>
                <div className="flex items-center gap-4">
                  <BalconyIcon className="text-2xl text-light-orangy" />
                  <p>Balcony</p>
                </div>
              </div>
              <p className="font-palanquin text-gray-700 font-medium">
                Amenities
              </p>
              <div className="flex justify-between py-5 px-[10px] bg-white rounded-md text-gray-600">
                <div className="flex items-center gap-4">
                  <WifiIcon className="text-2xl text-light-orangy" />
                  <p>Internet</p>
                </div>
                <div className="flex items-center gap-4">
                  <TowelIcon className="text-2xl text-light-orangy" />
                  <p>Towels and sheets</p>
                </div>
                <div className="flex items-center gap-4">
                  <CleaningIcon className="text-2xl text-light-orangy" />
                  <p>Final cleaning</p>
                </div>
              </div>
              <p className="font-palanquin text-gray-700 font-medium">
                Nearby Places
              </p>
              <div className="flex justify-between py-5 px-[10px] bg-white rounded-md text-gray-600">
                <div className="flex items-center gap-4">
                  <BusStopIcon className="text-2xl text-light-orangy" />
                  <div>
                    <p className="font-palanquin font-medium">Bus Stop</p>
                    <p className="font-montserrat text-[14px]">{singlePostData.busStop}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ShoppingMallIcon className="text-2xl text-light-orangy" />
                  <div>
                    <p className="font-palanquin font-medium">Shopping Mall</p>
                    <p className="font-montserrat text-[14px]">{singlePostData.shoppingMall}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <SchoolIcon className="text-2xl text-light-orangy" />
                  <div>
                    <p className="font-palanquin font-medium">School</p>
                    <p className="font-montserrat text-[14px]">{singlePostData.school}</p>
                  </div>
                </div>
              </div>
              <p className="font-palanquin text-gray-700 font-medium">
                Location
              </p>
              <div className="h-[200px] w-full z-[1]">
                <Map items={[singlePostData]} />
              </div>

              <p className="font-palanquin text-gray-700 font-medium">
                About The Landlord
              </p>
              <div className="text-gray-600 font-montserrat">
                <div>
                  <p>
                    With luxuryhomes since{" "}
                    <span className="font-medium">{singlePostData.landLordDuration }</span>
                  </p>
                  <p>
                    The landlord contact details will be provided after your
                    booking.
                  </p>
                </div>
                <div className="pb-5">
                  <p className="flex gap-1 items-center">
                    Landlord type: <span className="font-medium">private</span>{" "}
                    <SponsoredIcon />
                  </p>
                  <p>
                    Tenants successfully hosted:{" "}
                    <span className="font-medium">{singlePostData.hostedTenants }</span>
                  </p>
                  <p>
                    Response time :{" "}
                    <span className="font-medium">{singlePostData.responseTime }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SinglePage