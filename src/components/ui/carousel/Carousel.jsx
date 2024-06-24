import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/carousel.css"
import { icons } from '../../../assets';
const {CheveronLeftIcon,CheveronRightIcon } = icons;

const CarouselData = [
  {
    key: 1,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 2,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 3,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 4,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 5,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 6,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 7,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    key: 8,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12, 300,000",
    houseLocation: "House in sadinia, italy",
  },
];

const Carousel = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow to="next" />,
      prevArrow: <SamplePrevArrow to="prev" />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <section className="carousel-wrapper w-full m-auto">
      <h2 className="font-palanquin text-3xl text-gray-900 font-medium">
        Listings You'll Love
      </h2>
      <div className="mt-10 ">
        <Slider {...settings}>
          {CarouselData.map(({ key, src, price, houseLocation }) => (
            <div className="image" key={key}>
              <div className="zoom-in">

                {/* image wrapper start */}
                <figure className="rounded-xl">
                  <img className="h-[210px] md:h-[285px]" src={src} />
                </figure>
                {/* image wrapper ends */}

                <div className='mt-3'>
                  <p className="font-medium text-gray-900 font-palanquin mb-1 leading-tight">
                    ${price}
                  </p>
                  <p className="text-gray-600 font-montserrat">
                    {houseLocation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <CheveronLeftIcon className="arrows" style={{ color: "black" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <CheveronRightIcon className="arrows" style={{ color: "black" }} />
    </div>
  );
}


export default Carousel
