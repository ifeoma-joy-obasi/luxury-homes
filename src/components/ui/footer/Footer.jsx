import React from 'react'
import { icons } from '../../../assets';
import { Link } from 'react-router-dom';
const { FacebookIcon, TwitterXlineIcon, YoutubeIcon, LinkedinIcon } = icons;

const footerData = [
  {
    key: 1,
    title: "THE COMPANY",
    footerLinks: [
      { linkLabel: "About us", to: "/" },
      { linkLabel: "Jobs", to: "/" },
      { linkLabel: "Press", to: "/" },
      { linkLabel: "Imprint/Privacy policy", to: "/" },
      { linkLabel: "Terms and Conditions", to: "/" },
      { linkLabel: "Legal Notice", to: "/" },
      { linkLabel: "DSA Notification", to: "/" },
    ],
  },
  {
    key: 2,
    title: "OUR SERVICES​",
    footerLinks: [
      { linkLabel: "Business Solutions", to: "/" },
      { linkLabel: "Landlord Solutions", to: "/" },
      { linkLabel: "Enhanced Hygiene Initiative", to: "/" },
      { linkLabel: "Instant Booking", to: "/" },
      { linkLabel: "Terms and Conditions", to: "/" },
      { linkLabel: "Luxuryhomes Apartment Standards", to: "/" },
      { linkLabel: "Supply Integrations", to: "/" },
      { linkLabel: "FAQ / Help Center", to: "/" },
    ],
  },

  {
    key: 3,
    title: "RESOURCES​​",
    footerLinks: [
      { linkLabel: "Our Booking Process", to: "/" },
      { linkLabel: "Furnished Apartments", to: "/" },
      { linkLabel: "Serviced Apartments", to: "/" },
      { linkLabel: "Corporate Housing", to: "/" },
      { linkLabel: "Digital Nomads", to: "/" },
      { linkLabel: "Student Accommodation", to: "/" },
      { linkLabel: "Monthly Rentals", to: "/" },
      { linkLabel: "Blogs", to: "/" },
    ],
  },
];

const socialMediaIcons = [
  { SocialMediaIcon: FacebookIcon, key: 1, to: "/" },
  { SocialMediaIcon: TwitterXlineIcon, key: 2, to: "/" },
  { SocialMediaIcon: YoutubeIcon, key: 3, to: "/" },
  { SocialMediaIcon: LinkedinIcon, key: 4, to: "/" }
];

const Footer = () => {
  return (
    <section className="w-full bg-black/65 text-white/70 pt-4 pl-5 min-h-[500px] pr-2">
      <div className="flex flex-col lg:flex-row-reverse justify-start lg:justify-between  w-full lg:w-[99%] lg:m-auto xl:w-[90%]">
        <div className="flex flex-col lg:flex-row w-[100%] justify-between">
          {footerData.map(({ key, title, footerLinks }) => (
            <div key={key} className="mt-8">
              <h2 className="font-palanquin text-xl font-medium mb-5">
                {title}
              </h2>
              <ul className="space-y-4 cursor-pointer list-none">
                {footerLinks.map(({ linkLabel, to }) => (
                  <li
                    key={linkLabel}
                    className="font-montserrat font-medium"
                  >
                    <Link to={to} className="hover:text-white transition-all">
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center lg:text-left w-[100%] lg:w-[40%]">
          <h1 className="font-palanquin text-2xl font-medium mb-4 mt-16 lg:mt-8">
            Luxuryhomes
          </h1>
          <div className="space-y-2 font-montserrat font-medium text-[1.1rem]">
            <p>Comfortable living</p>
            <p>Lavish decor</p>
            <p>Healthy Environment</p>
          </div>
          <div className="flex gap-4 mt-5 mb-10 place-content-center lg:place-content-start lg:mt-16">
            {socialMediaIcons.map(({ SocialMediaIcon, key, to }) => (
              <Link key={key} to={to} className="hover:text-white">
                {<SocialMediaIcon />}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="font-montserrat text-center pb-5 cursor-pointer lg:mt-20">
          {" "}
          <span className="text-[1.1rem]">&copy;</span> Copyright 2024
          Luxuryhomes | All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer