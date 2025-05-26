/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";

import HomePageComponent from "../components/home-page/home-page";

const HomePage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>VeloTrack</title>
                <meta
                    name='description'
                    content='Tracking app build with React + Next Js + TypeScript.'
                />
                {/* Correct favicon path: should be relative to the public folder */}
                <link rel='icon' href='/tracking.jpg' />
            </Head>

            <HomePageComponent />
        </Fragment>
    );
};

export default HomePage;
