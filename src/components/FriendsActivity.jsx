import React from "react";
import { GoPersonAdd } from "react-icons/go";
import { VscKebabVertical } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
import FriendCard from "./FriendCard";
import FriendImg1 from "../img/avatar 1.jpeg";
import FriendImg2 from "../img/avatar 2.jpeg";
import FriendImg3 from "../img/avatar 3.jpeg";
import FriendImg4 from "../img/avatar 4.jpeg";
import { Link } from "react-router-dom";

const FriendsActivity = () => {
	return (
		<section className="col-span-3 p-5 bg-friendActivityBg rounded-tr-lg rounded-br-lg ">
			<div className="mt-4">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-textWhite text-base inline-block  align-middle">
						Friends activity
					</h2>
					<GoPersonAdd className="text-textWhite text-lg" />
				</div>
				<hr className="text-bodyColor/25" />

				<FriendCard
					first={true}
					name="Mohammad reza"
					img={FriendImg1}
					activityName="Product design"
					borderColor="#f9d390"
					position="t"
				/>
				<FriendCard
					name="Afshin Mohammadi"
					img={FriendImg2}
					activityName="Icon design learning"
					borderColor="#00ffc0"
					position="b"
				/>
				<FriendCard
					name="Mehdi Rezaee"
					img={FriendImg3}
					activityName="The wicked wall flowers club"
					borderColor="#f9d390"
					position="t"
				/>
				<FriendCard
					name="Arman Rokno"
					img={FriendImg4}
					activityName="The hacking UI podcast"
				/>
			</div>
			<div className="mt-2">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-textWhite text-base inline-block  align-middle">
						Your activity statistics
					</h2>
					<VscKebabVertical className="text-textWhite text-lg" />
				</div>
				<div className="flex pb-2">
					<div className="flex flex-col space-x-1">
						<h2 className="text-xs text-thirdSpringGreen  inline-block  align-middle">
							<div className="w-2 h-2 inline-block mr-1  border-thirdSpringGreen bg-thirdSpringGreen rounded-full "></div>
							Today
						</h2>
						<h2 className="text-xs text-textWhite  inline-block  align-middle">
							<strong>352</strong> min
						</h2>
					</div>
					<div className="flex w-full max-w-[55%] bg-navBg rounded-full h-1 dark:bg-gray-700 m-auto">
						<div
							className="bg-thirdSpringGreen h-1 rounded-full"
							style={{ width: "95%" }}></div>
					</div>
					<h2 className="text-xs text-thirdSpringGreen  inline-block  align-middle">
						<div className="w-2 h-2 inline-block mr-1  border-thirdSpringGreen bg-thirdSpringGreen rounded-full "></div>
						99%
					</h2>
				</div>
				<div className="flex py-2">
					<div className="flex flex-col">
						<h2 className="text-xs text-fourthMakeup  inline-block  align-middle">
							<div className="w-2 h-2 inline-block mr-1  border-fourthMakeup bg-fourthMakeup rounded-full "></div>
							Yesterday
						</h2>
						<h2 className="text-xs text-textWhite  inline-block  align-middle">
							<strong>132</strong> min
						</h2>
					</div>
					<div className="flex w-full max-w-[55%] bg-navBg rounded-full h-1  m-auto">
						<div
							className="bg-fourthMakeup h-1 rounded-full"
							style={{ width: "56%" }}></div>
					</div>
					<h2 className="text-xs text-fourthMakeup  inline-block  align-middle">
						<div className="w-2 h-2 inline-block mr-1  border-fourthMakeup bg-fourthMakeup rounded-full "></div>
						56%
					</h2>
				</div>

				<Link to="#" className="flex justify-center items-center">
					<h2 className="text-xs text-bodyColor ">View More</h2>
					<BiChevronDown className="text-xs text-bodyColor " />
				</Link>
			</div>
		</section>
	);
};

export default FriendsActivity;
