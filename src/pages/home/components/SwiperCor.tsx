import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image from "../../../assets/swiper.png";

const SwiperCor = () => {
  return (
    <div className="container mx-auto relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt={`slide-${i}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[536px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mySwiper">
        {/* <div className="swiper-button-prev !w-10 !h-10 sm:!w-12 sm:!h-12 !bg-white !rounded-full !shadow-md after:!text-black after:!text-lg sm:after:!text-xl"></div>
        <div className="swiper-button-next !w-10 !h-10 sm:!w-12 sm:!h-12 !bg-white !rounded-full !shadow-md after:!text-black after:!text-lg sm:after:!text-xl"></div> */}
      </div>

      <div className="mySwiper">
        {/* <div className="swiper-pagination [&>.swiper-pagination-bullet]:!w-2 [&>.swiper-pagination-bullet]:!h-2 [&>.swiper-pagination-bullet]:!bg-gray-400 [&>.swiper-pagination-bullet-active]:!w-5 [&>.swiper-pagination-bullet-active]:!rounded-lg [&>.swiper-pagination-bullet-active]:!bg-black"></div> */}
      </div>
    </div>
  );
};

export default memo(SwiperCor);
