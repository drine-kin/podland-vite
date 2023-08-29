import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";

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

const Waveform = ({ audio }) => {
	const song = window.location.origin + audio;
	const containerRef = useRef();

	const waveSurferRef = useRef({
		isPlaying: () => false,
	});

	const [isPlaying, toggleIsPlaying] = useState(false);

	useEffect(() => {
		const waveSurfer = WaveSurfer.create({
			container: containerRef.current,
			waveColor: gradient,
			height: 25,
			progressColor: progressGradient,
			barWidth: 2,
		});
		waveSurfer.load(song);

		console.log(containerRef && containerRef.current);

		waveSurfer.on("ready", () => {
			waveSurferRef.current = waveSurfer;
		});

		return () => {
			waveSurfer.destroy();
		};
	}, [song]);

	return (
		<div className="playing">
			<button
				onClick={() => {
					waveSurferRef.current.playPause();
					toggleIsPlaying(waveSurferRef.current.isPlaying());
				}}
				type="button">
				{isPlaying ? (
					<FaPauseCircle size="2.5em" className="text-textWhite" />
				) : (
					<FaPlayCircle size="2.5em" className="text-textWhite" />
				)}
			</button>
			<div ref={containerRef} />
		</div>
	);
};

Waveform.propTypes = {
	audio: PropTypes.string.isRequired,
};

export default Waveform;
