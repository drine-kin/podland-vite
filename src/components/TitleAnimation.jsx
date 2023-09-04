const TitleAnimation = ({ songTitle }) => {
	return (
		<>
			<div className="overflow-hidden">
				<p className="marqueeStyle text-sm text-textWhite">{songTitle}</p>
			</div>
		</>
	);
};

export default TitleAnimation;
