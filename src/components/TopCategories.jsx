import React from "react";
import Category from "./Category";
import { TopCategoriesList } from "../constants/constants";

const TopCategories = () => {
	const [categories, setCategories] = React.useState(
		TopCategoriesList.length > 0 ? TopCategoriesList : []
	);

	return (
		<section className="space-y-3 mb-8 ">
			<h2 className="text-textWhite text-xl inline-block  align-middle">
				Top Categories
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
				{categories.map((category) => (
					<Category
						key={category.id}
						activeClass={category.activeClass}
						categoryName={category.name}
						noOfPodcasts={category.noOfPodcasts}
						iconName={category.iconName}
					/>
				))}
			</div>
		</section>
	);
};

export default TopCategories;
