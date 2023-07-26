import React from "react";
import Banner from "./Banner";
import Explore from "./Explore";
import { Link } from "react-router-dom";
import TopCategories from "./TopCategories";
import CurrentListening from "./CurrentListening";

const MainContent = () => {
	return (
		<main className="col-span-7 flex flex-col justify-between bg-mainContentColor p-5 pb-0 mb-0 overflow-y-auto relative ">
			<div className="flex justify-between py-2">
				<h2 className="text-textWhite text-xl inline-block  align-middle">
					Listen to gold podcast
				</h2>
				<Link to="#" className="text-secondaryOrange">
					See all
				</Link>
			</div>
			<Banner />
			<Explore />
			<TopCategories />
			<CurrentListening />
		</main>
	);
};

export default MainContent;
