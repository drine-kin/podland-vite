import React from "react";
import { GoPersonAdd } from "react-icons/go";
import FriendCard from "./FriendCard";
import FriendImg1 from "../img/avatar 1.jpeg";
import FriendImg2 from "../img/avatar 2.jpeg";
// import FriendImg3 from "../img/avatar 3.jpeg";
// import FriendImg4 from "../img/avatar 4.jpeg";

const FriendsActivity = () => {
	return (
		<section className="col-span-3 p-5 bg-friendActivityBg rounded-tr-lg rounded-br-lg">
			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<h2 className="text-textWhite text-xl inline-block  align-middle">
						Friends Activity
					</h2>
					<GoPersonAdd className="text-textWhite text-lg" />
				</div>
				<hr className="text-bodyColor/25" />
				<FriendCard
					first={true}
					name="Mohammad reza"
					img={FriendImg1}
					activityName="Product design"
					borderColor="fourthMakeup"
					position="t"
				/>
				<FriendCard
					name="Afshin Mohammadi"
					img={FriendImg2}
					activityName="Icon design learning"
					borderColor="secondaryOrange"
					position="b"
				/>
			</div>
		</section>
	);
};

export default FriendsActivity;
