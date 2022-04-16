import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

import { Outlet } from "react-router-dom";

const MainLayout = ({ pageTitle }) => {
	return (
		<>
			<Header />
			<Main title={pageTitle}>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default MainLayout;
