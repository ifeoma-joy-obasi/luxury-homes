import React from "react";
import { icons } from "../../../../assets";

const {
  HouseIcon,
  CorporateNetworkIcon,
  TeamIcon,
  GlobeIcon,
  RankingBoostersIcon,
  PersonalAccountManagerIcon,
  RatingStarIcon,
} = icons;

const landlordsLoginData = [
  {
    id: 1,
    Icon: HouseIcon,
    header: "Guaranteed first rent",
    subHeader: "The initial rent is secured",
  },
  {
    id: 2,
    Icon: CorporateNetworkIcon,
    header: "Large corporate network",
    subHeader: "15,000+ partnerships with corporate clients",
  },
  {
    id: 3,
    Icon: PersonalAccountManagerIcon,
    header: "Personal Account Manager",
    subHeader: "Direct contact person for all your questions",
  },
  {
    id: 4,
    Icon: TeamIcon,
    header: "Dedicated reservations team",
    subHeader: "Tech first, but a human touch when needed",
  },
  {
    id: 5,
    Icon: GlobeIcon,
    header: "Global reach",
    subHeader: "Free marketing on over 150 channels",
  },
  {
    id: 6,
    Icon: RankingBoostersIcon,
    header: "Ranking boosters available",
    subHeader:
      "Get more visibility to boost your listings when you need it for all instant charge payment methods",
  },
];

const LandlordsLogin = () => {
  return (
    <section>
      <div className="w-[80%] m-auto text-gray-900">
        <h1 className="text-2xl font-palanquin my-8 font-medium">
          Welcome to Luxuryhomes
        </h1>
        <div className="flex flex-col gap-5">
          {landlordsLoginData.map(({ id, header, subHeader, Icon }) => (
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
            <div className="flex gap-1 font-montserrat items-center">
              <RatingStarIcon className="text-2xl text-[#00b67a] self-start" />
              <p className=" font-medium text-xl">Trustpilot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandlordsLogin;
