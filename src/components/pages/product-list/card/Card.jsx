import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../../../assets';
import "../card/card.css"
import { PRODUCTLIST } from '../../../constants';
const { HeartIcon, SponsoredIcon } = icons;


const Card = ({item}) => {
    return (
      <section className="cards">
        <section className="card-zoomin-hover flex flex-col md:flex-row gap-0 md:gap-5 border border-[#e0e0e0] rounded-md cursor-pointer hover:shadow-lg">
          {/* image container */}

          <Link
            to={`/${PRODUCTLIST}/${item.id}`}
            className="flex-[2] min-h-[250px] overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="block italic max-w-full min-h-full max-sm:rounded-tr-md  rounded-tl-md md:rounded-bl-md object-cover"
            />
          </Link>

          {/* text container */}
          <div className="relative flex-[3] flex flex-col md:flex-row min-h-[270px] md:min-h-[250px] max-h-fit p-3">
            <div className="flex-[4] p-0 md:pt-4 pr-2">
              {item.isSponsored && (
                <p className="flex items-center gap-1 font-medium text-gray-600 font-palanquin text-[0.8rem] mb-2">
                  Sponsored{" "}
                  <SponsoredIcon className="text-[0.8rem] self-center" />
                </p>
              )}
              <div>
                <h2 className="card-title text-gray-900 font-medium text-xl font-palanquin">
                  <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="text-gray-600 mt-1 font-palanquin">
                  {item.address}
                </p>
              </div>
              <div className="flex mt-8 justify-between flex-row md:mt-8 text-gray-600 font-palanquin ">
                <p>
                  <b className="text-gray-900">{item.ft}</b> ft<sup>2</sup>
                </p>
                <p>
                  <b className="text-gray-900">{item.guest}</b>{" "}
                  {item.guest > 1 ? "Guests" : "Guest"}
                </p>
                <p>
                  <b className="text-gray-900">{item.bedroom}</b>{" "}
                  {item.bedroom > 1 ? "Bedrooms" : "Bedroom"}
                </p>
              </div>
              <p className="absolute bottom-3 text-gray-600 text-[0.9rem] md:text-[1.1rem] font-palanquin">
                {item.available.length === 3 ? "Available" : "Available From"}{" "}
                <span className="text-gray-900 text-[1rem]">
                  {item.available}
                </span>
              </p>
            </div>

            <div className="md:border-l md:border-[#e0e0e0] flex-[2] md:p-2 flex flex-col">
              <div className="absolute bottom-0 right-0 md:top-0 w-[50px] h-[50px] hover:bg-[#f5f5f5] grid place-content-center rounded-full  transition-all">
                <HeartIcon className="text-[#e0e0e0] text-[2rem]" />
              </div>
              <div className="mb-4 md:absolute  md:bottom-20 text-gray-600 font-medium font-montserrat">
                <b className=" text-gray-900 text-[1.1rem]">
                  $ {item.price}
                </b>{" "}
                / month
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

export default Card