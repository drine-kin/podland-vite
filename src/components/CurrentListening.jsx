import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BsPauseCircleFill } from "react-icons/bs";
import Song from "../assets/Infinitely Falling - Fly By Midnight (Official Music Video).mp3";

const CurrentListening = () => {
	return (
		<section className="-ml-5 -mr-5 sticky bottom-0 ">
			<div className=" ">
				<div className="flex flex-col space-y-3  bg-cardColor ">
					<div className="flex flex-row justify-center items-center ">
						{/* <BsPauseCircleFill className="text-textWhite text-3xl" /> */}
						{/* <span className="text-textWhite text-sm">Icon Design Learning</span> */}
						<AudioPlayer
							src={Song}
							showJumpControls={false}
							customControlsSection={["MAIN_CONTROLS"]}
							footer={"Icon Design Learning"}
							layout="horizontal-reverse"
							onPlay={(e) => console.log("onPlay")}
							// other props here
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CurrentListening;
