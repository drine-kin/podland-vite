import React from "react";
import PodlandLogo from "../img/headphone.svg";
import UserImg from "../img/drine kin photo.jpg";
import DoneImg from "../img/check.png";

import { RiCompassDiscoverFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch, BiSolidBell } from "react-icons/bi";
import { ImStarHalf } from "react-icons/im";
import { MdWorkspacePremium } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="col-span-2 flex flex-col justify-between bg-navBg rounded-tl-lg rounded-bl-lg py-4">
			<div className="flex flex-row grow-0 justify-center items-center p-1">
				<img src={PodlandLogo} className="w-10 " alt="Podland Logo" />
				<h2 className="text-textWhite text-xl inline-block  align-middle pl-3">
					Podland
				</h2>
			</div>
			<nav className="flex flex-col 2xl:m-auto grow-0 justify-center pt-4 ">
				<NavLink
					exact="true"
					to="/"
					className={({ isActive }) =>
						isActive
							? "text-secondaryOrange border-secondaryOrange bg-secondaryOrange/10 border-l-2"
							: ""
					}>
					<div className="flex items-center text-bodyColor hover:bg-secondaryOrange/10  hover:border-l-2 px-6 transition delay-75 hover:border-secondaryOrange hover:text-secondaryOrange py-3">
						<RiCompassDiscoverFill />
						<span className="pl-3">Discovery</span>
					</div>
				</NavLink>
				<NavLink
					to="/shop"
					className={({ isActive }) =>
						isActive
							? "text-secondaryOrange border-secondaryOrange bg-secondaryOrange/10 border-l-2"
							: ""
					}>
					<div className="flex items-center text-bodyColor hover:bg-secondaryOrange/10  hover:border-l-2 px-6 transition delay-75 hover:border-secondaryOrange hover:text-secondaryOrange py-3">
						<AiOutlineShoppingCart />
						<span className="pl-3">Shop</span>
					</div>
				</NavLink>
				<NavLink
					to="/search"
					className={({ isActive }) =>
						isActive
							? "text-secondaryOrange border-secondaryOrange bg-secondaryOrange/10 border-l-2"
							: ""
					}>
					<div className="flex items-center text-bodyColor hover:bg-secondaryOrange/10  hover:border-l-2 px-6 transition delay-75 hover:border-secondaryOrange hover:text-secondaryOrange py-3">
						<BiSearch />
						<span className="pl-3">Search</span>
					</div>
				</NavLink>
				<NavLink
					to="/notification"
					className={({ isActive }) =>
						isActive
							? "text-secondaryOrange border-secondaryOrange bg-secondaryOrange/10 border-l-2"
							: ""
					}>
					<div className="flex items-center text-bodyColor hover:bg-secondaryOrange/10  hover:border-l-2 px-6 transition delay-75 hover:border-secondaryOrange hover:text-secondaryOrange py-3">
						<BiSolidBell />
						<span className="pl-3">Notification</span>
					</div>
				</NavLink>
				<NavLink
					to="/favourite"
					className={({ isActive }) =>
						isActive
							? "text-secondaryOrange border-secondaryOrange bg-secondaryOrange/10 border-l-2"
							: ""
					}>
					<div className="flex items-center text-bodyColor hover:bg-secondaryOrange/10  hover:border-l-2 px-6 transition delay-75 hover:border-secondaryOrange hover:text-secondaryOrange py-3">
						<ImStarHalf />
						<span className="pl-3">Favourite</span>
					</div>
				</NavLink>
				<NavLink
					to="/premium"
					className={({ isActive }) =>
						isActive
							? "text-secondaryOrange border-secondaryOrange bg-secondaryOrange/10 border-l-2"
							: ""
					}>
					<div className="flex items-center text-bodyColor hover:bg-secondaryOrange/10  hover:border-l-2 px-6 transition delay-75 hover:border-secondaryOrange hover:text-secondaryOrange py-3">
						<MdWorkspacePremium />
						<span className="pl-3">Premium</span>
					</div>
				</NavLink>
			</nav>
			<div className="rounded-lg grow flex justify-center items-center -ml-5 w-44 h-38 max-h-56 bg-primaryBlack my-2">
				<div className="flex flex-col space-y-1 px-6">
					<img src={DoneImg} className="m-auto w-8" alt="complete status" />
					<div className="text-center">
						<h3 className="text-textWhite text-base">
							Your listening <br />
							is <span className="text-fourthMakeup">complete</span> today
						</h3>
					</div>
					<h3 className="text-textWhite text-center text-sm">
						354 / <span className="text-xs text-bodyColor">300 min</span>
					</h3>
					<div className="w-20 m-auto">
						<div className="bg-bodyColor w-18 rounded-full">
							<div className="bg-fourthMakeup text-xs h-1 w-16 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex grow-0 justify-center items-center ">
				<img src={UserImg} className="w-10 rounded-full" alt="User profile" />
				<div className="flex flex-col px-3">
					<h2 className="text-textWhite  inline-block  align-middle">
						Drine Kin
					</h2>
					<small className="text-bodyColor inline-block  align-middle">
						Podcast Creator
					</small>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
