import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import BannerImages from './BannerImages';
import { Link } from 'react-router-dom';
// import BannerBottom from '../BannerBottom/BannerBottom';
// import { Link } from 'react-router-dom';



const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const ban_imgs = [
    {
      id: 1,
      img: "https://i.ibb.co/RSx0JLt/slider-1s.jpg",
      des: "University Main Campus View.",

    },
    {
      id: 2,
      img: "https://i.ibb.co/qC6ss6h/slider-2.jpg",
      des: "Students' Celebrating their Graduation Moment.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/L1yJW31/slider-3.jpg",
      des: "The Glorious Journey and Proud moment with President.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/D5Gm8FM/slider-4.jpg",
      des: "Award ceremony for successfull Students. ",
    },


  ]
  return (
    <div id='banner_container_full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto">
        <div className="banner_left w-4/5 mx-auto mt-8">
          <h2>Welcome to the Retrun Zero University</h2>
          <p>On the first day of July 1921 the Retrun Zero University opened its doors to students with Sir P.J. Hartog ...Founded : 1921 Faculty Members : 2000+. On the first day of July 1921 the University of Return Zero opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University......</p>
          <button className='mt-8'> <Link to="/about">Read More</Link> </button>
        </div>
        <div className="banner_right w-4/5 mx-auto">
          <Slider {...settings}>
            {
              ban_imgs.map(slide => <BannerImages
                key={slide.id}
                slide={slide}
              ></BannerImages>)
            }

          </Slider>
        </div>

      </div>
      
    </div>
  );
};

export default Banner;