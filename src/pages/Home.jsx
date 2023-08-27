import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import FriendsActivity from "../components/FriendsActivity";

const Home = () => {
	return (
		<Wrapper>
			<Navbar />
			<MainContent />
			<FriendsActivity />
		</Wrapper>
	);
};

export default Home;
