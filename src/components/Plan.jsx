import React, { useState } from "react";
import TabSwitch from "./TabSwitch";
import Button from "./Button";
import { plans } from "../../data";
import { motion } from "framer-motion";

const Plan = () => {
  const [isYearly, setIsYearly] = useState(false);

  function calculatePrice(price) {
    return isYearly ? price * 12 + 10 : price;
  }

  return (
    <div className="container text-center flex flex-col items-center gap-4 py-12 h-screen">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lg"
      >
        We have selected the best payment solutions for you
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl"
      >
        Choose your tariff plan
      </motion.h1>
      <TabSwitch isYearly={isYearly} setIsYearly={setIsYearly} />

      <div className="flex items-center justify-between gap-5 mt-5">
        {plans.map((plan, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${plan.background} w-[278px] h-[411px] flex flex-col items-start p-8 justify-between rounded-xl border-2 border-black shadow-lg shadow-black`}
            key={index}
          >
            <p className="text-lg">{plan.level}</p>
            <p className="font-bold text-3xl">
              ${calculatePrice(plan.cost)}{" "}
              {isYearly === true ? `yearly` : `month`}
            </p>

            <ul className="flex flex-col gap-3 mb-5 text-start font-semibold">
              <li>{plan.email} email</li>
              <li>{plan.share}</li>
              <li>{plan.clients} clients</li>
              <li>{plan.support}</li>
            </ul>

            <Button
              variant="btn_download"
              title="Get Started"
              className="ml-3"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
