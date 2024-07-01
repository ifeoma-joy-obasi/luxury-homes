import React from 'react'
import { HeroVideo } from "../../../assets/videos/index"
import {LOGIN,  LANDLORDSLOGINPAGE} from "../../constants/index"
import { Link } from 'react-router-dom';
import { icons } from '../../../assets';
const { VerifiedSupplyIcon, AnalyticsIcon, SpeedIcon } = icons;


const ForLandlords = () => {
  return (
    <section>
      <main className="">
        <section className="w-full  h-[70vh] md:h-[60vh] relative max-w-[95%] mx-auto">
          {/* overlay so that the text on the video can be readable */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div>
          <video
            className="rounded-2xl w-full h-full object-cover"
            src={HeroVideo}
            autoPlay
            loop
            muted
          />
          <div className="absolute text-xl md:text-2xl w-full h-full top-0 flex flex-col justify-center items-center text-white lg:text-3xl text-center">
            <h1>
              Rent your Furnished apartment to Students, BusinessTravellers,
              Individuals and Families
            </h1>
            <button className="w-[20%] bg-white-400 font-montserrat rounded-md mt-3 p-2 text-gray-400  hover:bg-white transition-all font-medium text-[1.1rem]">
              Create your first listing
            </button>
            <p>
              Already a Luxuryhome landlord?{" "}
              <Link to={`/${LOGIN}/${LANDLORDSLOGINPAGE}`} className="border-b">
                Log in here.
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-[95%] mx-auto">
          <div className="text-gray-900">
            <h1 className="font-palanquin text-3xl font-medium">
              What is Luxuryhomes?
            </h1>
            <p className="font-montserrat mt-6 mb-6 text-xl">
              Luxuryhomes is one of the leading rental platforms for monthly and
              yearly rentals. Some of the largest companies in the world find
              furnished apartments, co-living rooms, and serviced apartments
              through Luxuryhomes.
            </p>
            <p className="font-montserrat mt-6 mb-6 text-xl">
              We will support you through every step of the sign-up process to
              your first booking.
            </p>
            <p className="font-montserrat mt-6 text-xl">
              Rent out your properties by{" "}
              <span className="text-light-orangy cursor-pointer transition-colors hover:text-gray-900">
                signing up now
              </span>
              .
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="text-gray-900 bg-gray-50 rounded-[65px]">
            <div className="max-w-[95%] mx-auto pt-8 pb-4">
              <h2 className="text-3xl mb-4 flex items-center gap-4 font-medium font-palanquin">
                <VerifiedSupplyIcon className="text-light-orangy" /> Zero risk
              </h2>
              <div className="flex w-full justify-between place-items-center">
                <div className="w-[48%]">
                  <h2 className="font-palanquin font-medium text-2xl mb-6">
                    Guaranteed first rent
                  </h2>
                  <p className="font-montserrat text-xl leading-8">
                    Rent out your apartment through Luxuryhomes with{" "}
                    <b>zero risk</b>. The first rent is <b>guaranteed</b> when
                    the payment is made via our online payment methods.*
                  </p>
                </div>
                <div className="w-[48%]">
                  <h2 className="font-palanquin font-medium text-2xl mb-6">
                    Damage protection
                  </h2>
                  <p className="font-montserrat text-xl leading-8">
                    Bookings on Luxuryhomes include our custom-made insurance
                    package that covers your apartment in the event of
                    damages.**
                  </p>
                </div>
              </div>
              <div className=" mt-16 mb-8">
                <p className="font-palanquin text-gray-900">
                  * For all instant charge payments paid through our payment
                  provider, Stripe.
                </p>
                <p className="font-palanquin text-gray-900">
                  **This service only applies to apartments located in Austria,
                  Belgium, France, Germany, Ireland, and Spain
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-gray-900 bg-gray-50 rounded-[65px]">
            <div className="max-w-[95%] mx-auto pt-8 pb-10">
              <h2 className="text-3xl mb-4 flex items-center gap-4 font-medium font-palanquin">
                <SpeedIcon className="text-light-orangy" /> Frictionless
              </h2>
              <div className="flex w-full justify-between place-items-center">
                <div className="w-[48%]">
                  <h2 className="font-palanquin font-medium text-2xl mb-6">
                    Effortless booking process
                  </h2>
                  <p className="font-montserrat text-xl leading-8">
                    Our <b>industry-leading technology</b> makes handling
                    bookings <b>easier than ever.</b> easier than ever. Soft or
                    instant booking combined with online signing of contracts
                    makes it easier than ever to rent out your apartment.
                  </p>
                </div>
                <div className="w-[48%]">
                  <h2 className="font-palanquin font-medium text-2xl mb-6">
                    Market data
                  </h2>
                  <p className="font-montserrat text-xl leading-8">
                    Our team of expert Key Account Managers provide{" "}
                    <b>personalized support</b> to all suppliers. We share{" "}
                    <b>data & insights,</b> continuously suggest improvements
                    and <b>drive growth.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-gray-900 bg-gray-50 rounded-[65px]">
            <div className="max-w-[95%] mx-auto pt-8 pb-10">
              <h2 className="text-3xl mb-4 flex items-center gap-4 font-medium font-palanquin">
                <AnalyticsIcon className="text-light-orangy" /> High occupancy
              </h2>
              <div className="flex w-full justify-between place-items-center">
                <div className="w-[48%]">
                  <h2 className="font-palanquin font-medium text-2xl mb-6">
                    Global reach
                  </h2>
                  <p className="font-montserrat text-xl leading-8">
                    Let our marketing and sales experts take care of your
                    marketing. We advertise your apartments on{" "}
                    <b>100+ different channels, free of charge.</b> This means
                    you can reach high-quality guests from all over the world.
                  </p>
                </div>
                <div className="w-[48%]">
                  <h2 className="font-palanquin font-medium text-2xl mb-6">
                    Large corporate network
                  </h2>
                  <p className="font-montserrat text-xl leading-8">
                    Our tech-enabled experience drives exceptional value for our
                    <b> 15.000+ corporate clients.</b> By leveraging our growing
                    network of, we can drive <b>more bookings</b> from
                    <b>high-quality guests</b> to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default ForLandlords