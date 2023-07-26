import React from "react";
import { MdDesignServices } from "react-icons/md";
import { BsHeartHalf } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { CgHello } from "react-icons/cg";

const IconComponent = ({ icon }) => {
  if (icon === "Product Design") {
    return <MdDesignServices className="text-textWhite text-xl " />;
  } else if (icon === "Sport") {
    return <FaRunning className="text-textWhite text-xl " />;
  } else if (icon === "Lifestyle") {
    return <BsHeartHalf className="text-textWhite text-xl " />;
  } else {
    return <CgHello className="text-textWhite text-xl " />;
  }
};

export default IconComponent;
