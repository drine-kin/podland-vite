import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function Arrow({ children, disabled, onClick }) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`text-textWhite cursor-pointer flex sm:hidden flex-col justify-center bg-cardColor rounded-full p-1 shadow-md ${
				disabled
					? "transition ease-in-out delay-150 opacity-0 hidden"
					: "transition ease-in-out delay-150 opacity-100"
			} select-none`}>
			{children}
		</button>
	);
}

export function LeftArrow() {
	const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
		React.useContext(VisibilityContext);

	const [disabled, setDisabled] = React.useState(
		!initComplete || (initComplete && isFirstItemVisible)
	);
	React.useEffect(() => {
		// NOTE: detect if whole component visible
		if (visibleElements.length) {
			setDisabled(isFirstItemVisible);
		}
	}, [isFirstItemVisible, visibleElements]);

	return (
		<Arrow disabled={disabled} onClick={() => scrollPrev()}>
			<MdNavigateBefore className="text-textWhite text-2xl" />
		</Arrow>
	);
}

export function RightArrow() {
	const { isLastItemVisible, scrollNext, visibleElements } =
		React.useContext(VisibilityContext);

	// console.log({ isLastItemVisible });
	const [disabled, setDisabled] = React.useState(
		!visibleElements.length && isLastItemVisible
	);
	React.useEffect(() => {
		if (visibleElements.length) {
			setDisabled(isLastItemVisible);
		}
	}, [isLastItemVisible, visibleElements]);

	return (
		<Arrow disabled={disabled} className="" onClick={() => scrollNext()}>
			<MdNavigateNext className="text-textWhite text-2xl" />
		</Arrow>
	);
}
