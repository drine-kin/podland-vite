import React from "react";
import { Link } from "react-router-dom";
import UIUXImg from "../img/uiux tips.png";
import IconDesignImg from "../img/icon design tips.png";
import PodcastCard from "./PodcastCard";

const Explore = () => {
  return (
    <section className="space-y-3 py-5">
      <h2 className="text-textWhite text-xl inline-block  align-middle">
        Explore
      </h2>
      <div className="flex space-x-5">
        <Link href="#" className="text-bodyColor text-sm inline-block">
          Recently Played
        </Link>
        <Link
          to="#"
          className="inline-block  text-sm text-secondaryOrange  hover:text-secondaryOrange"
        >
          Top podcasts
        </Link>
        <Link
          href="#"
          className="text-bodyColor inline-block text-sm hover:text-secondaryOrange"
        >
          New podcasts
        </Link>
        <Link
          href="#"
          className="text-bodyColor inline-block  text-sm hover:text-secondaryOrange"
        >
          Best sellers
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <PodcastCard
          courseImg={UIUXImg}
          title="Best Tips for UIUX"
          author="Arman Raki"
          category="Icon Design"
          duration="1h 34m"
        />
        <PodcastCard
          courseImg={IconDesignImg}
          title="Icon Design Tips"
          author="Afshint2Y"
          category="Visual Design"
          duration="40m"
        />
      </div>
    </section>
  );
};

export default Explore;
