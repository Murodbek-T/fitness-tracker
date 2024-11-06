import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css/pagination";
import "swiper/css";

import { aboutItems } from "../../data/index";

const Carousel = () => {
  const colors = ["#FFBD12", "#FFB0BC", "#FA6648"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Swiper
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          slidesPerView={4}
          spaceBetween={70}
          loop={true}
          modules={[Pagination]}
          className="w-full mySwiper"
        >
          {aboutItems.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className="card flex flex-col gap-4 text-left p-3 text-white"
                style={{ backgroundColor: getRandomColor() }}
              >
                <div className="flex gap-6">
                  <img src={card.img} alt="card-img" />
                  <h1 className="text-xl">{card.title}</h1>
                </div>
                <p className="regular-16">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="custom-pagination"
      ></motion.div>
    </div>
  );
};

export default Carousel;
