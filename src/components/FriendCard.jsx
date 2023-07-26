import React from "react";
import PlayImg from "../img/play btn.png";

// border: 2px solid green;
//     border-top-width: 3px;
//     border-top-color: yellow;

const FriendCard = ({
	first = false,
	name,
	img,
	activityName,
	borderColor,
	position,
}) => {
	return (
		<div
			className={`rounded-md space-y-4 mt-5 ${
				first && "ml-2 -mr-10 p-3 bg-navBg"
			}`}>
			<div className="flex justify-between items-center">
				<div className="flex space-x-2">
					<div
						className={`p-1 border-2 border-bodyColor/25 border-${position}-2 border-${position}-${borderColor} rounded-full`}>
						<img
							src={img}
							className="w-10 rounded-full p-1 border-textWhite border friend-avatar"
							alt="User profile"
						/>
					</div>

					<div className="flex flex-col px-3">
						<h2 className="text-textWhite  inline-block  align-middle">
							<div className="w-2 h-2 inline-block mr-1  border-fourthMakeup bg-fourthMakeup rounded-full "></div>
							{name}
						</h2>
						<small className="text-bodyColor inline-block  align-middle">
							{activityName}
						</small>
					</div>
				</div>
				{first && <img src={PlayImg} className="w-6 " alt="friend profile " />}
			</div>
			{!first && <hr className="text-bodyColor/25 w-full pb-3" />}
		</div>
	);
};

export default FriendCard;
