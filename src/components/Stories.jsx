import React from "react";
import { stories } from "../../data";
import { motion } from "framer-motion";

const Stories = () => {
  return (
    <div className="container text-center flex flex-col items-center gap-4 py-20 h-screen">
      <motion.h1
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl"
      >
        Stories of our users
      </motion.h1>
      <div className="flex mt-24 items-center justify-between gap-10">
        {stories.map((story) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-start text-start gap-3"
            key={story.id}
          >
            <div
              className={`w-[380px] h-[264px] ${story.background} rounded-xl flex items-center justify-center border-2 border-black`}
            >
              <img src={story.img} alt="" />
            </div>
            <a href="/">
              <h1 className="text-2xl">{story.title}</h1>
            </a>
            <p className="max-w-[374px]">{story.description}</p>
            <p className="font-semibold tracking-wider">{story.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
