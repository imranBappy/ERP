import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerNotice from './BannerNotice';
import "./BannerBottom.css";

const BannerBottom = () => {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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

      const notices = [
        {
          id:1,
          n1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae."
        },
        {
          id:2,
          n1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae."
        },
        {
          id:3,
          n1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae."
        },
        {
          id:4,
          n1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae."
        },
        {
          id:5,
          n1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae."
        },
        {
          id:6,
          n1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae."
        },
      ]

    return (
        <div className='notice_container'>
            <div className="notice_body">
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div className="notice-title">
                  
                  <h2>Latest Notice</h2>
                </div>
                <div className="col-span-3 notice_slide">
                  <Slider {...settings}>
                      {
                        notices.map(notice => <BannerNotice
                          key={notice.id}
                          notice = {notice}
                        ></BannerNotice>)
                      }
                  </Slider>
                </div>
              </div>

            </div>
        </div>
    );
};

export default BannerBottom;