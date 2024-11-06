import React from "react";
import Email from "./Email";
import Button from "./Button";
import { motion } from "framer-motion";

const Watch = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="w-full bg-main-10 h-screen">
      <div className="flex items-center justify-between h-full container text-white">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h1 className="text-5xl max-w-[483px] mb-10">
            Start training already on your watch
          </h1>
          <p className="max-w-[483px] text-lg">
            Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et
            esse cupidatat consequat.Nisi ullamco tempor tempor nulla labore ad
            labore sit eu duis. Ut et esse cupidatat consequat.
          </p>
          <div className="flex items-center gap-3">
            <Email
              width={300}
              className="rounded-xl px-5"
              placeholder="Email"
            />
            <Button
              type="submit"
              title="Let's GO!"
              background="#FFBD12"
              variant="btn_common"
              className="bg-yellow-10 text-white mt-9"
              onClick={handleSubmit}
            />
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/watch.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Watch;
