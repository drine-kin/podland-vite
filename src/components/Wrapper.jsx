import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const Wrapper = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div
			className={`bg-mainContentColor lg:bg-bodyBg overflow-x-hidden ${
				showMenu && "overflow-y-hidden"
			}`}>
			<div className="container 2xl:container mx-auto h-screen max-h-screen flex flex-col justify-center">
				<div className="lg:grid lg:grid-cols-12 grid-flow-row max-h-screen rounded-xl lg:px-10 lg:py-8">
					<MenuContext.Provider value={{ showMenu, setShowMenu }}>
						{children}
					</MenuContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
