import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="text-center my-20 flex flex-col items-center gap-4 about">
      <motion.h1
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl mb-3"
      >
        About Text
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[500px] text-center text-lg"
      >
        Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et
        esse cupidatat consequat.
      </motion.p>
      <Carousel />
    </div>
  );
}
