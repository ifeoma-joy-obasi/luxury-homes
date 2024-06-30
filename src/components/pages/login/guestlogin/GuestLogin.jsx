import React from 'react'
import { icons } from '../../../../assets';

const {
  VerifiedSupplyIcon,
  ArrowPathIcon,
  CheckIcon,
  HouseIcon,
  EyeIcon,
  TeamIcon,
  RatingStarIcon,
} = icons;

const guestLoginData = [
  {
    id: 1,
    Icon: VerifiedSupplyIcon,
    header: "Verified Supply",
    subHeader:
      "All properties are vetted through our extensive verification process",
  },
  {
    id: 2,
    Icon: ArrowPathIcon,
    header: "Flexibility",
    subHeader:
      "Stay anywhere you want for 1 week, 1 year or anything in between",
  },
  {
    id: 3,
    Icon: CheckIcon,
    header: "All-inclusive pricing",
    subHeader:
      "No hidden costs or fees. You know exactly what you will pay upfront",
  },
  {
    id: 4,
    Icon: HouseIcon,
    header: "Wide variety of choice",
    subHeader:
      "Find the right home for you. We offer co living, serviced apartments, corporate housing and more",
  },
  {
    id: 5,
    Icon: EyeIcon,
    header: "Transparent and easy booking method",
    subHeader:
      "Use our instant booking options to go from searching to booking in minutes",
  },
  {
    id: 6,
    Icon: TeamIcon,
    header: "Dedicated reservations team",
    subHeader:
      "Whether you have a question about a property, need help with booking, or encounter any issues during their stay, HomeLike's support team is available to help",
  },
];

const GuestLogin = () => {
  return (
    <section>
      <div className="w-[80%] m-auto text-gray-900">
        <h1 className="text-2xl font-palanquin my-8 font-medium">
          Welcome to Luxuryhomes
        </h1>
        <div className="flex flex-col gap-5">
          {guestLoginData.map(({ id, header, subHeader, Icon }) => (
            <div key={id} className="flex gap-4">
              <div>
                <Icon className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-palanquin font-medium">{header}</h2>
                <p className="font-montserrat">{subHeader}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex gap-4 mt-4">
            <p className="font-medium text-[1.09rem]">Great</p>
            <p>
              <span className="text-xl font-medium">4.2</span> out of 5
            </p>
            <div className="flex gap-1 font-montserrat items-center mb-5">
              <RatingStarIcon className="text-2xl text-[#00b67a] self-start" />
              <p className=" font-medium text-xl">Trustpilot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuestLogin