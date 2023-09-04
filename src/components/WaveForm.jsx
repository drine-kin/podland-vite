import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";
import TitleAnimation from "./TitleAnimation";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
gradient.addColorStop(0, "#656666"); // Top color
gradient.addColorStop((canvas.height * 0.7) / canvas.height, "#656666"); // Top color
gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, "#ffffff"); // White line
gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, "#ffffff"); // White line
gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, "#B1B1B1"); // Bottom color
gradient.addColorStop(1, "#B1B1B1"); // Bottom color

const progressGradient = ctx.createLinearGradient(
	0,
	0,
	0,
	canvas.height * 1.35
);
progressGradient.addColorStop(0, "#EE772F"); // Top color
progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, "#EB4926"); // Top color
progressGradient.addColorStop(
	(canvas.height * 0.7 + 1) / canvas.height,
	"#ffffff"
); // White line

progressGradient.addColorStop(
	(canvas.height * 0.7 + 2) / canvas.height,
	"#ffffff"
); // White line

progressGradient.addColorStop(
	(canvas.height * 0.7 + 3) / canvas.height,
	"#F6B094"
); // Bottom color

progressGradient.addColorStop(1, "#F6B094"); // Bottom color

const formWaveSurferOptions = (containerRef) => ({
	container: containerRef,
	waveColor: gradient,
	height: 30,
	progressColor: progressGradient,
	barWidth: 2,
});

const formatTime = (seconds) => {
	const minutes = Math.floor(seconds / 60);
	const secondsRemainder = Math.round(seconds) % 60;
	const paddedSeconds = `0${secondsRemainder}`.slice(-2);
	return `${minutes}:${paddedSeconds}`;
};

const Waveform = ({ audio, title, category }) => {
	const song = window.location.origin + audio;

	const waveformRef = useRef(null);
	const wavesurfer = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [duration, setDuration] = useState("0:00");
	const [currentTime, setCurrentTime] = useState("0:00");

	useEffect(() => {
		setPlaying(false);

		const options = formWaveSurferOptions(waveformRef.current);
		wavesurfer.current = WaveSurfer.create(options);

		wavesurfer.current
			.load(song)
			.then(() => setDuration(formatTime(wavesurfer.current.getDuration())));

		wavesurfer.current.on("audioprocess", () => {
			setCurrentTime(formatTime(wavesurfer.current.getCurrentTime()));
		});

		return () => {
			wavesurfer.current.un("audioprocess");
			wavesurfer.current.destroy();
		};
	}, [song]);

	const handlePlayPause = () => {
		setPlaying(!playing);
		wavesurfer.current.playPause();
	};

	//console.log(wavesurfer.current && wavesurfer.current.getScroll());

	return (
		<div className="flex justify-around space-x-4">
			<button onClick={handlePlayPause} type="button">
				{playing ? (
					<FaPauseCircle size="2.5em" className="text-secondaryOrange" />
				) : (
					<FaPlayCircle size="2.5em" className="text-secondaryOrange" />
				)}
			</button>
			<div className="current-info ">
				<TitleAnimation songTitle={title} />
				<p className="text-bodyColor text-sm">{category}</p>
			</div>
			<div id="waveform" ref={waveformRef} className="w-full">
				<div id="time">{currentTime}</div>
				<div id="duration">{duration}</div>
			</div>
		</div>
	);
};

Waveform.propTypes = {
	audio: PropTypes.string.isRequired,
};

export default Waveform;
