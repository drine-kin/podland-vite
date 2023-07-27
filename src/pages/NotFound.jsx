import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";

const NotFound = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className="flex justify-center items-center col-span-10  bg-friendActivityBg">
				<h3 className="text-lg text-bodyColor">Coming Soon...</h3>
			</div>
		</Wrapper>
	);
};

export default NotFound;
