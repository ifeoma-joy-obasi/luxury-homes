import React from 'react'
import { icons } from '../../../../assets';
const { RatingStarIcon } = icons;

const CustomerReviews = () => {

    const ratingStarData = [
      {
        key: 1,
        RatingStarIcon: RatingStarIcon,
        className: "bg-[#73CF11]",
      },
      {
        key: 2,
        RatingStarIcon: RatingStarIcon,
        className: "bg-[#73CF11]",
      },
      {
        key: 3,
        RatingStarIcon: RatingStarIcon,
        className: "bg-[#73CF11]",
      },
      {
        key: 4,
        RatingStarIcon: RatingStarIcon,
        className: "bg-[#73CF11]",
      },
      {
        key: 5,
        RatingStarIcon: RatingStarIcon,
        className: "bg-[#DCDCE6]",
      },
    ];

  return (
    <section>
      <h1 className="text-3xl font-medium text-gray-900 font-palanquin">
        Trusted By Our Customers
      </h1>

      <div className='grid place-content-center'>
        <div className="flex items-center  mt-9 cursor-pointer mb-1">
          <RatingStarIcon className="text-[2.5rem] text-[#00B67A]" />
          <p className="text-gray-900 font-bold text-[25px]">Trustpilot</p>
        </div>

        <div className="flex  flex-col text-left">
          <div className="flex gap-1">
            {ratingStarData.map(({ key, RatingStarIcon, className }) => (
              <div
                key={key}
                className={`text-[2.7rem] text-white ${className}`}
              >
                <RatingStarIcon />
              </div>
            ))}
          </div>
          <p className="font-palanquin text-gray-600 text-[1rem] font-medium mt-1">
            TrustScore <b className='text-gray-900'>4.8 </b> | <b className='text-gray-900'>3,422 </b>reviews
          </p>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews