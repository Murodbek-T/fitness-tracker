import React, { useState } from "react";
import Button from "./Button";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import Email from "./Email";
import { motion } from "framer-motion";

const Login = () => {
  const [activeLink, setActiveLink] = useState("SignIn");
  function handleLinkClick(link) {
    setActiveLink(link);
  }

  return (
    <div className="my-20 flex flex-col items-center gap-4">
      <div className="flex items-center justify-between h-screen gap-24">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mt-24"
        >
          <h1 className="text-5xl max-w-[500px]">
            Download now and get a bonus
          </h1>
          <p className="max-w-[400px] mt-5 text-lg">
            Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et
            esse cupidatat consequat ea exercitation.
          </p>

          <div className="flex gap-6 items-center mt-5">
            <a href="/">
              <Button
                variant="btn_common"
                icon={<FaAppStore className="text-3xl" />}
                position="left"
                title="Download"
                background="bg-red-10"
                className="text-white"
              />
            </a>
            <a href="/">
              <Button
                variant="btn_common"
                icon={<FaGooglePlay className="text-3xl" />}
                position="left"
                title="Download"
                background="bg-red-10"
                className="text-white"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-black mt-32 w-[483px] min-h-[541px] p-5 rounded-xl shadow-md shadow-black"
        >
          <div className="flex gap-5 items-center ml-5 mt-5">
            <p
              className={`text-2xl font-bold ${
                activeLink === "SignIn" ? "text-red-10" : "text-black"
              } transition-all`}
              onClick={() => handleLinkClick("SignIn")}
            >
              Sign In
            </p>
            <p
              className={`text-2xl font-bold ${
                activeLink === "Login" ? "text-red-10" : "text-black"
              } transition-all`}
              onClick={() => handleLinkClick("Login")}
            >
              Login
            </p>
          </div>

          {activeLink === "SignIn" ? (
            <div className="flex flex-col p-5">
              <Email
                placeholder="Your Name"
                className="shadow-sm rounded-lg pl-3"
              />
              <Email
                placeholder="Email"
                className="shadow-sm rounded-lg pl-3"
              />
              <Email
                placeholder="Company"
                className="shadow-sm rounded-lg pl-3"
              />
              <Email
                placeholder="Company"
                className="shadow-sm rounded-lg pl-3"
              />

              <div className="flex items-center gap-3 mt-7">
                <label
                  className="relative inline-block cursor-pointer"
                  id="check"
                >
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-6 h-6 bg-yellow-400 border-2 border-black rounded-md block peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:absolute peer-checked:after:left-[8px] peer-checked:after:top-[2px] peer-checked:after:w-[8px] peer-checked:after:h-[14px] peer-checked:after:border-r-2 peer-checked:after:border-b-2 peer-checked:after:border-black peer-checked:after:rotate-45"></span>
                </label>
                <p>
                  I have read{" "}
                  <a href="/" className="text-red-10">
                    User Agreement
                  </a>{" "}
                  and agree to all conditions
                </p>
              </div>

              <Button
                variant="btn_email"
                title="Sign In"
                background="bg-red-10"
                className="mt-8 text-white"
              />
            </div>
          ) : (
            <div className="flex flex-col p-5">
              <Email
                placeholder="Email"
                className="shadow-sm rounded-lg pl-3"
              />
              <Email
                placeholder="Phone Number"
                className="shadow-sm rounded-lg pl-3"
              />
              <Email
                placeholder="Password"
                className="shadow-sm rounded-lg pl-3"
              />

              <div className="flex items-center gap-3 mt-7">
                <label
                  className="relative inline-block cursor-pointer"
                  id="check"
                >
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-6 h-6 bg-yellow-400 border-2 border-black rounded-md block peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:absolute peer-checked:after:left-[8px] peer-checked:after:top-[2px] peer-checked:after:w-[8px] peer-checked:after:h-[14px] peer-checked:after:border-r-2 peer-checked:after:border-b-2 peer-checked:after:border-black peer-checked:after:rotate-45"></span>
                </label>
                <p>
                  I have read{" "}
                  <a href="/" className="text-red-10">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/" className="text-red-10">
                    Terms of Conditions
                  </a>
                </p>
              </div>

              <Button
                variant="btn_email"
                title="Sign In"
                background="bg-red-10"
                className="mt-8 text-white"
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
