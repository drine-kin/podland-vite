import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";

const NotFound = () => {
	return (
		<Wrapper>
			<Navbar />
			{/* <div className="flex justify-center items-center col-span-10  bg-friendActivityBg">
				<h3 className="text-lg text-bodyColor">Coming Soon...</h3>
			</div> */}
			<main className="col-span-12 lg:col-span-7 lg:flex lg:flex-col justify-between bg-mainContentColor p-5 pb-0 mb-0 lg:overflow-y-auto relative">
				<div className="flex justify-center items-center max-h-screen">
					<h3 className="text-lg text-bodyColor">Coming Soon...</h3>
				</div>
			</main>
			<section className="lg:col-span-3 pb-24 p-5 lg:pb-0 lg:mb-0 bg-mainContentColor rounded-tr-lg rounded-br-lg"></section>
		</Wrapper>
	);
};

export default NotFound;
