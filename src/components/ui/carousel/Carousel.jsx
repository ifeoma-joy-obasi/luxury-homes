import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/carousel.css"
import { icons } from '../../../assets';
import { PRODUCTLIST } from '../../constants';
const {CheveronLeftIcon,CheveronRightIcon } = icons;

const CarouselData = [
  {
    id: 9,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 8,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 12,300",
    houseLocation: "House in sadinia, italy",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 9,200",
    houseLocation: "House in sadinia, italy",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: " 5,000",
    houseLocation: "House in sadinia, italy",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "7000",
    houseLocation: "House in sadinia, italy",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "6000",
    houseLocation: "House in sadinia, italy",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "6500",
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
        Apartments You'll Love
      </h2>
      <div className="mt-10 ">
        <Slider {...settings}>
          {CarouselData.map(({ id, src, price, houseLocation }) => (
            <a href={`${PRODUCTLIST}/${id}`}  className="image" key={id}>
              <div className="zoom-in">

                {/* image wrapper start */}
                <figure className="rounded-xl">
                  <img className="h-[210px] md:h-[285px]" src={src} />
                </figure>
                {/* image wrapper ends */}

                <div className='mt-3'>
                  <p className="font-medium text-gray-900 font-palanquin mb-1 leading-tight">
                    $ {price} / month
                  </p>
                  <p className="text-gray-600 font-montserrat">
                    {houseLocation}
                  </p>
                </div>
              </div>
            </a>
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
