import React from "react";
import Song from "../assets/infinitely-falling-fly-by-midnight-official-music-video.mp3";
import Waveform from "./WaveForm";

const CurrentListening = (inputText) => {
	return (
		<section className="m-auto lg:-ml-5 lg:-mr-5 fixed left-0 right-0 lg:sticky bottom-0 ">
			<div className="">
				<div className="flex flex-col  bg-cardColor p-4">
					{/* <div className="flex flex-row justify-center items-center "> */}
					<Waveform audio={Song} title="Infinitely Falling" category="Pop" />
					{/* </div> */}
				</div>
			</div>
		</section>
	);
};

export default CurrentListening;
