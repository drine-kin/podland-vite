import React from "react";
import BannerImg from "../img/banner.png";

const Banner = () => {
	return (
		<div className="flex flex-col space-y-3">
			<div className="flex flex-row justify-around items-center rounded-xl bg-cardColor  p-5 md:p-0">
				<div className="space-y-2 lg:space-y-4 ">
					<h2 className="text-textWhite text-xl inline-block  align-middle">
						Upgrade your plan
						<br />
						<span className="text-bodyColor text-sm">
							70% discount for 1 year subscription
						</span>
					</h2>

					<div className="space-x-1 lg:space-x-3">
						<button className="rounded-full px-2 lg:px-5 py-2 text-sm text-textWhite bg-secondaryOrange">
							Go Premium
						</button>
						<button className="rounded-full px-2 lg:px-5 py-2 text-sm text-bodyColor border mt-4 lg:mt-0">
							Try for free
						</button>
					</div>
				</div>
				<img src={BannerImg} className="w-28 lg:w-52" alt="Banner " />
			</div>
		</div>
	);
};

export default Banner;
