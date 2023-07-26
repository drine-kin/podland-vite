import React from "react";

const Wrapper = ({ children }) => {
	return (
		<div className="bg-bodyBg">
			<div className="container 2xl:container mx-auto bg-bodyBg h-screen max-h-screen ">
				<div className="grid grid-cols-12 h-screen  rounded-xl px-10 py-8">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
