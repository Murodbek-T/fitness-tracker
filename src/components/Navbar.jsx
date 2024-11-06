import { FaBars, FaFacebook, FaGoogle, FaLinkedin, FaX } from "react-icons/fa6";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container py-5 flex justify-between items-center"
      >
        <a href="/">
          <img src="/Big.svg" />
        </a>

        <div className="flex gap-12 items-center">
          <div className="flex gap-6">
            <a href="#">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#">
              <FaGoogle className="text-xl" />
            </a>
          </div>
          <Button
            variant="btn_nav"
            icon={<FaBars />}
            position="left"
            onClick={() => {
              setIsMobile(true);
            }}
          />
        </div>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        className={`${
          isMobile === true ? "flex fixed" : "hidden"
        } right-0 h-full bg-main-10 w-[400px] z-20 top-0 flex-col p-10 shadow-xl shadow-black sm:w-[full]`}
      >
        <div className="flex justify-between">
          <a href="/">
            <img src="/Big.svg" alt="" />
          </a>
          <Button
            variant="btn_nav"
            icon={<FaX />}
            position="left"
            onClick={() => setIsMobile(false)}
          />
        </div>

        <ul className="flex flex-col items-center justify-center h-full gap-5 text-center">
          <li className="bg-cyan-10 w-full text-xl py-2 rounded-sm hover:brightness-75 transition-all">
            <a href="#">Home</a>
          </li>
          <li className="bg-cyan-10 w-full text-xl py-2 rounded-sm hover:brightness-75 transition-all">
            <a href="#">About</a>
          </li>
          <li className="bg-cyan-10 w-full text-xl py-2 rounded-sm hover:brightness-75 transition-all">
            <a href="#">Manual</a>
          </li>
          <li className="bg-cyan-10 w-full text-xl py-2 rounded-sm hover:brightness-75 transition-all">
            <a href="#">Pricing</a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
