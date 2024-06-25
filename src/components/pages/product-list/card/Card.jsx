import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../../../assets';
import "../card/card.css"
const {HeartIcon } = icons;

const Card = ({item}) => {
    return (
      <section className='cards'>
        <section className="card-zoomin-hover flex gap-[20px] border border-[#e0e0e0] rounded-md cursor-pointer hover:shadow-lg">
          {/* image container */}

          <Link
            to={`/${item.id}`}
            className="flex-[2] h-[200px] overflow-hidden"
          >
            <img
              src={item.img}
              alt="hello there"
              className="block italic w-full h-full  rounded-tl-md rounded-bl-md object-cover"
            />
          </Link>

          {/* text container */}
          <div className="flex-[3] flex flex-row">
            <div className="flex-[4]">
              <h2 className='card-title'>
                <Link to={`/${item.id}`}>{item.title}</Link>
              </h2>
              <p>{item.address}</p>
              <div className="flex gap-4">
                <p>
                  {item.ft} ft<sup>2</sup>
                </p>
                <p>
                  {item.guest} {item.guest > 1 ? "Guests" : "Guest"}
                </p>
                <p>
                  {item.bedroom} {item.bedroom > 1 ? "Bedrooms" : "Bedroom"}
                </p>
              </div>
              <p>
                {item.available.length === 3 ? "Available" : "Available From"}{" "}
                {item.available}
              </p>
            </div>

            <div className="border-l border-[#e0e0e0] flex-[2] p-2 flex flex-col">
              <div className="w-[50px] h-[50px] hover:bg-[#f5f5f5] grid place-content-center rounded-full self-end transition-all">
                <HeartIcon className="text-[#e0e0e0] text-[2rem]" />
              </div>
              <div className="mt-12">
                <b>$ {item.price}</b> / month
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

export default Card