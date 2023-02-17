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
          n1:"🔴 2020 degree 3rd year final exam result release."
        },
        {
          id:2,
          n1:"2023 power to power routine change. 🔴 In 2023 academic year"
        },
        {
          id:3,
          n1:"🔴 Admission to Masters Professional Course in 2023 academic year has started."
        },
        {
          id:4,
          n1:"🔴 2023 Master's Final Exam Center List Released"
        },
        {
          id:5,
          n1:"🔴 2023 LLB first and last phase exam routine release."
        },
        {
          id:6,
          n1:"🔴 Degree 1st Year Admission Result (2nd Merit List) Publication."
        },
      ]

    return (
        <div className='notice_container'>
            <div className="notice_body">
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div className="notice-title animate__animated animate__lightSpeedInLeft animate__infinite	infinite animate__slower	3s" >
                  
                  <h2>New Notice</h2>
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