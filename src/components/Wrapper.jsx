import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const Wrapper = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div
			className={`bg-bodyBg overflow-x-hidden ${
				showMenu && "overflow-y-hidden"
			}`}>
			<div className="container 2xl:container mx-auto bg-bodyBg h-screen max-h-screen ">
				<div className="lg:grid lg:grid-cols-12 grid-flow-row h-screen rounded-xl lg:px-10 lg:py-8">
					<MenuContext.Provider value={{ showMenu, setShowMenu }}>
						{children}
					</MenuContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
