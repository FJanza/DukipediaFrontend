import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {convertToEmbed} from "../lib/utils";
import {format, parse} from "@formkit/tempo";

const FreestyleCard = ({title, img, subtitle, date, url}) => {
  return (
    <div className="flex flex-col h-full justify-around items-center relative">
      <card className="p-2 bg-[#00C0C8]/80 h-[85%] md:h-[70%] rounded-md w-[80%]">
        <h3 className="min-h-16 text-base md:text-lg font-bold px-3 pt-3 text-center">
          {title}
        </h3>
        <div
          className="relative video-container"
          data-clip-item
          data-url={convertToEmbed(url) ?? "dQw4w9WgXcQ"}
        >
          <img
            src={img}
            loading="lazy"
            className="clip-full-rounded-sm-image-yt md:clip-full-rounded-md-image-yt cursor-pointer"
          />
          <img
            src="/play-button.svg"
            className="absolute w-10 h-10 top-[calc(50%-20px)] right-[calc(50%-20px)] opacity-80 cursor-pointer"
          />
        </div>
        <h5 className="text-sm md:text-base font-semibold text-white/70 text-center">
          {subtitle}
        </h5>
      </card>
      <div className="relative flex flex-col items-center w-full  mt-3">
        <div className="circle w-4 h-4 rounded-full bg-white z-30" />
        <span className="text-sm md:text-base font-semibold">{date}</span>
        <div className="hidden md:block absolute w-full h-[49px] border-t-2 border-[#797979] -bottom-4" />
      </div>
    </div>
  );
};

const FreestyleCarrusel = ({freestyles}) => {
  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={0}
      loop={true}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 5,
        },
      }}
      className="mySwiper h-full"
    >
      {freestyles.map((free) => {
        const {title, subtitle, thumbnails, date, url} = free.data;
        const img = thumbnails.high.url;
        const formatedDate = parse(date.split("T")[0], "YYYY-MM-DD");
        return (
          <SwiperSlide key={free.id}>
            <FreestyleCard
              title={title}
              subtitle={subtitle}
              img={img}
              date={format(formatedDate, {date: "medium"})}
              url={url}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FreestyleCarrusel;
