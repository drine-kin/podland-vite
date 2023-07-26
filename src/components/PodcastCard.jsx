import React from "react";
import { TiThLargeOutline } from "react-icons/ti";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsThreeDotsVertical, BsPlayCircle } from "react-icons/bs";

const PodcastCard = ({ courseImg, title, author, category, duration }) => {
  return (
    <div className="flex justify-between rounded-xl  bg-cardColor p-4">
      <div className="">
        <img src={courseImg} className="w-28" alt="UI UX" />
      </div>
      <div className="pl-2 space-y-2">
        <div className="grid grid-cols-5 ">
          <h2 className="text-textWhite place-self-start col-span-4">
            {title}
          </h2>
          <BsThreeDotsVertical className="text-textWhite col-span-1 place-self-end " />
        </div>
        <span className="text-bodyColor text-xs">{author}</span>

        <hr className="text-bodyColor w-full pb-3" />
        <div className="flex justify-between items-center ">
          <div className="space-y-1">
            <div className="flex items-center text-bodyColor space-x-1.5">
              <TiThLargeOutline className="text-sm" />
              <small>{category}</small>
            </div>
            <div className="flex items-center text-bodyColor space-x-1.5">
              <BiSolidTimeFive className="text-sm" />
              <small>{duration}</small>
            </div>
          </div>
          <button className="flex justify-between items-center text-bodyColor rounded-full px-2 py-1 bg-navBg space-x-2">
            <BsPlayCircle className="text-sm" />
            <small>Play</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
