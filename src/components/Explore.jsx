import React from "react";
import UIUXImg from "../img/uiux tips.png";
import IconDesignImg from "../img/icon design tips.png";
import PodcastCard from "./PodcastCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "../components/Arrows";
import { ExploreCategoriesList } from "../constants/constants";

function onWheel(apiObj, ev) {
	const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

	if (isThouchpad) {
		ev.stopPropagation();
		return;
	}

	if (ev.deltaY < 0) {
		apiObj.scrollNext();
	} else if (ev.deltaY > 0) {
		apiObj.scrollPrev();
	}
}

function Card({ name, route }) {
	return (
		<div
			style={{
				width: "120px",
				color: "white",
			}}
			tabIndex={0}
			className="card">
			<div className="card">
				<div className="text-sm text-bodyColor">{name}</div>
			</div>
		</div>
	);
}

const Explore = () => {
	const [categories, setCategories] = React.useState(
		ExploreCategoriesList.length > 0 ? ExploreCategoriesList : []
	);

	return (
		<section className="space-y-3 py-5 relative">
			<h2 className="text-textWhite text-xl inline-block  align-middle">
				Explore
			</h2>

			<ScrollMenu
				LeftArrow={LeftArrow}
				RightArrow={RightArrow}
				onWheel={onWheel}>
				{categories.map((category) => (
					<Card itemId={category.id} name={category.name} key={category.id} />
				))}
			</ScrollMenu>
			<div className="grid md:grid-cols-2 gap-4">
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
