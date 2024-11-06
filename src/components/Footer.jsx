import React from "react";
import Button from "./Button";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-main-10 py-8">
      <div className="container flex items-center justify-between">
        <a href="/">
          <img src="/Big.svg" alt="" />
        </a>

        <ul className="flex items-center gap-5 text-white font-semibold">
          <li className="hover:text-yellow-10 transition-all">
            <a href="/">About</a>
          </li>
          <li className="hover:text-yellow-10 transition-all">
            <a href="/">Pricing</a>
          </li>
          <li className="hover:text-yellow-10 transition-all">
            <a href="/">Manual</a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <Button
            variant="btn_common"
            background="bg-yellow-10"
            icon={<FaAppStore />}
            position="left"
            title="Download"
            className="text-white"
          />
          <Button
            variant="btn_common"
            background="bg-yellow-10"
            icon={<FaGooglePlay />}
            position="left"
            title="Download"
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
