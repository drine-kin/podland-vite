import React from "react";
import Category from "./Category";

const TopCategories = () => {
	return (
		<section className="space-y-3 mb-8">
			<h2 className="text-textWhite text-xl inline-block  align-middle">
				Top Categories
			</h2>
			<div className="grid grid-cols-3 gap-3">
				<Category
					activeClass="active-border-bottom"
					categoryName="Product Design"
					noOfPodcasts="131"
					iconName="Product Design"
				/>
				<Category categoryName="Sport" noOfPodcasts="257" iconName="Sport" />
				<Category
					categoryName="Lifestyle"
					noOfPodcasts="97"
					iconName="Lifestyle"
				/>
			</div>
		</section>
	);
};

export default TopCategories;
