import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../../../assets';
import "../card/card.css"
const {HeartIcon } = icons;

const Card = ({item}) => {
    return (
      <section className="cards">
        <section className="card-zoomin-hover flex gap-[20px] border border-[#e0e0e0] rounded-md cursor-pointer hover:shadow-lg">
          {/* image container */}

          <Link
            to={`/${item.id}`}
            className="flex-[2] h-[250px] overflow-hidden"
          >
            <img
              src={item.img}
              alt="hello there"
              className="block italic w-full h-full  rounded-tl-md rounded-bl-md object-cover"
            />
          </Link>

          {/* text container */}
          <div className="relative flex-[3] flex flex-row min-h-[250px]">

              <div className="flex-[4] pt-4 pb-2">
                <div>
                  <h2 className="card-title text-gray-900 font-medium text-xl font-palanquin">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                  </h2>
                  <p className="text-gray-600 mt-1 font-palanquin">
                    {item.address}
                  </p>
                </div>
                <div className="flex gap-4 mt-8 text-gray-600 font-palanquin">
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
                <p className="absolute bottom-3 text-gray-600 text-[1.1rem] font-palanquin">
                  {item.available.length === 3 ? "Available" : "Available From"}{" "}
                  <span className="text-gray-900">{item.available}</span>
                </p>
              </div>

              <div className="border-l border-[#e0e0e0] flex-[2] p-2 flex flex-col">
                <div className="w-[50px] h-[50px] hover:bg-[#f5f5f5] grid place-content-center rounded-full self-end transition-all">
                  <HeartIcon className="text-[#e0e0e0] text-[2rem]" />
                </div>
                <div className="absolute bottom-20 text-gray-600 font-medium font-montserrat">
                  <b className="text-[1.1rem] text-gray-900 ">$ {item.price}</b>{" "}
                  / month
                </div>
              </div>
          </div>

        </section>
      </section>
    );
}

export default Card