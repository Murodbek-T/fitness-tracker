import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen w-full bg-main-10 text-white overflow-hidden">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center container"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-7 mb-24"
        >
          <h1 className="text-7xl max-w-[590px]">The best fitness tracker!</h1>
          <p className="text-xl max-w-[420px] leading-7">
            Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et
            esse cupidatat consequat ea exercitation.
          </p>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 items-center mt-5"
          >
            <a href="/">
              <Button
                variant="btn_download"
                icon={<FaAppStore className="text-3xl" />}
                position="left"
                title="Download"
              />
            </a>
            <a href="/">
              <Button
                variant="btn_download"
                icon={<FaGooglePlay className="text-3xl" />}
                position="left"
                title="Download"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-[55%]  flex justify-center -right-36"
        >
          <img src="/phone.png" alt="phone" width={460} className="z-10" />
          <img
            src="/cloud1.png"
            alt="cloud"
            className="absolute top-0 left-0 -z-1"
          />
          <img
            src="/cloud2.png"
            alt="cloud"
            className="absolute top-48 right-0 -z-1"
          />
          <img
            src="/cloud3.png"
            alt="cloud"
            className="absolute bottom-10 -left-10 -z-1"
          />
          <img
            src="/cloud-cyan.png"
            alt="cloud"
            className="absolute bottom-44 left-10 z-10"
          />
          <img
            src="/cloud-main.png"
            alt="cloud"
            className="absolute bottom-14 -right-2 z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
