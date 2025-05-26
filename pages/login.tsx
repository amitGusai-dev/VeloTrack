/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import LogInComponent from "../components/login-page/login";
import type { NextPage } from "next";

const LogInScreen: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>VeloTrack</title>
				<link rel='icon' href='/tracking.jpg' />
			</Head>
			<meta name='description' content='Log-in' />

			<LogInComponent />
		</Fragment>
	);
};

export default LogInScreen;
