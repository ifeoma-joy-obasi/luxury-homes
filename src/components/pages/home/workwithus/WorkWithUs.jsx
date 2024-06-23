import React from 'react'
import "../workwithus/work-with-us.css"
import { icons } from '../../../../assets';
const { CircleCheck } = icons;

const WorkWithUs = () => {

  const workwithusData = [
    {
      key: 1,
      src: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "a person working with a laptop",
      header: "Manage your team's accommodation",
      subHeader:
        "Find ready-to-move-in apartments for your employees and save costs & time.",
      points: {
        pointOne:
          "Free booking platform with your company logo tailored to your needs",
        pointTwo: " Flexible lease agreements and centralised payment solution",
        pointThree:
          "Dedicated Account Managers to support you during therelocation process",
      },
      buttonLabel: "Get a demo",
    },
    {
      key: 2,
      src: "https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=600",
      alt: "A modern House",
      header: " Rent your property with Luxuryhomes",
      subHeader:
        " Create your listings for free and secure bookings from high-quality tenants.",
      points: {
        pointOne: " Quick and easy process with professional assistance",
        pointTwo: " High occupancy rate guaranteed with worldwide visibility",
        pointThree:
          "Automatically insured and protection from last-minute cancellations",
      },
      buttonLabel: "Start listing",
    },
  ];



  return (
    <section>
      <h1 className="text-3xl font-medium text-gray-900 font-palanquin mb-8">
        Work With Us
      </h1>

      <section className="flex gap-8 flex-col md:flex-row flex-1">
        {workwithusData.map(
          ({ key, src, alt, header, subHeader, points, buttonLabel }) => (
            <div className="image" key={key}>
              <div className="zoom-in">
                {/* image wrapper start */}
                <figure className="rounded-t-xl">
                  <img className="h-[210px] md:h-[285px]" src={src} alt={alt} />
                </figure>
                {/* image wrapper ends */}

                <div className="h-auto rounded-b-xl border pb-5 pl-6 pr-6 pt-4 shadow-sm hover:shadow-lg lg:pb-4">
                  <div className="max-h-fit md:h-[400px] lg:h-[350px]">
                    <h2 className="font-palanquin text-[1.5rem] font-medium leading-8 text-gray-900">
                      {header}
                    </h2>
                    <p className=" text-gray-600 text-[1rem] font-palanquin leading-8">
                      {subHeader}
                    </p>

                    <div className="mt-4 font-montserrat font-medium">
                      <div className="flex items-center mt-4">
                        <div className="mr-3 self-start">
                          <CircleCheck className="text-[28px]" />
                        </div>
                        <p className="text-[1.1rem]">{points.pointOne}</p>
                      </div>

                      <div className="flex items-center mt-4">
                        <div className="mr-3 self-start">
                          <CircleCheck className="text-[28px]" />
                        </div>
                        <p className="text-[1.1rem]">{points.pointTwo}</p>
                      </div>

                      <div className="flex items-center mt-4">
                        <div className="mr-3 self-start">
                          <CircleCheck className="text-[28px]" />
                        </div>
                        <p className="text-[1.1rem]">{points.pointThree}</p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-gray-700 w-full font-medium text-white rounded-md p-3 mt-6 hover:bg-gray-500 transition-all text-[1.1rem]">
                    {buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </section>
  );
}

export default WorkWithUs