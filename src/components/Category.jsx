import React from "react";
import IconComponent from "./IconComponent";

const Category = ({ iconName, categoryName, noOfPodcasts, activeClass }) => {
  return (
    <div className="rounded-xl  bg-cardColor relative single-category-card">
      <div
        className={`flex justify-around items-center  p-5 ${activeClass} single-category-card-inner`}
      >
        <div className="flex justify-center items-center rounded-full w-10 h-10 bg-navBg ">
          <IconComponent icon={iconName} />
        </div>

        <div className="flex flex-col">
          <h3 className="text-textWhite">{categoryName}</h3>
          <span className="text-bodyColor text-xs">
            {noOfPodcasts} podcasts
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
