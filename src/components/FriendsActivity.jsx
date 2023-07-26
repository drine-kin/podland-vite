import React from "react";
import { GoPersonAdd } from "react-icons/go";
import FriendCard from "./FriendCard";
import FriendImg1 from "../img/avatar 1.jpeg";
import FriendImg2 from "../img/avatar 2.jpeg";
import FriendImg3 from "../img/avatar 3.jpeg";
import FriendImg4 from "../img/avatar 4.jpeg";

const FriendsActivity = () => {
	return (
		<section className="col-span-3 p-5 bg-friendActivityBg rounded-tr-lg rounded-br-lg">
			<div className="mt-4">
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
					borderColor="thirdSpringGreen"
					position="b"
				/>
				<FriendCard
					name="Mehdi Rezaee"
					img={FriendImg3}
					activityName="The wicked wall flowers club"
					borderColor="fourthMakeup"
					position="l"
				/>
				<FriendCard
					name="Arman Rokno"
					img={FriendImg4}
					activityName="The hacking UI podcast"
				/>
			</div>
		</section>
	);
};

export default FriendsActivity;
