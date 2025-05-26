/** @format */

import tw from "tailwind-styled-components";
import React from "react";
import Map from "../ui/map/map";
import Header from "../header/header";
import Footer from "../footer/footer";
import ConfirmActionItems from "./confirm-actions";

const ConfirmPageComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <Bg>
                <MainCard>
                    <MapWrapper>
                        <Map />
                    </MapWrapper>
                    <Content>
                        <Title>Confirm Your Ride</Title>
                        {/* Uncomment below if you want action items */}
                        {/* <ConfirmActionItems /> */}
                    </Content>
                </MainCard>
            </Bg>
            <Footer />
        </React.Fragment>
    );
};

export default ConfirmPageComponent;

// Styled Components
const Bg = tw.div`
min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef]
`;

const MainCard = tw.div`
w-full max-w-4xl bg-white bg-opacity-95 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden my-8
`;

const MapWrapper = tw.div`
flex-1 min-h-[350px] md:min-h-[500px] bg-gray-200
`;

const Content = tw.div`
flex-1 flex flex-col justify-center items-center p-8
`;

const Title = tw.h2`
text-2xl md:text-3xl font-bold text-gray-800 mb-6
`;
