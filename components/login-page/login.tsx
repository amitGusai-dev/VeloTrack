/** @format */

import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { auth, provider } from "../../config/firebase";

const LogInComponent: React.FunctionComponent = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithGoogleHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        auth
            .signInWithPopup(provider)
            .then(() => router.push("/"))
            .catch(() => {});
    };

    const signInWithEmailHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => router.push("/"))
            .catch((error) => {
                alert(error.message);
            });
    };

    const signUpWithEmailHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => router.push("/"))
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <Bg>
            <CenterCard>
                <AppLogo src='/images/vello.png' alt='veloTrack logo' />
                <Title>Welcome</Title>
                {/* Make the signup image much larger */}
                <HeadImage src='/images/Signup.svg' alt='Sign Up' />
                <form className="w-full flex flex-col gap-1.5 mt-2">
                    <SmallInput
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <SmallInput
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex gap-1.5">
                        <SmallButton type='button' onClick={signInWithEmailHandler}>
                            Sign In
                        </SmallButton>
                        <SmallButton type='button' onClick={signUpWithEmailHandler}>
                            Sign Up
                        </SmallButton>
                    </div>
                </form>
                <Divider>or</Divider>
                <SmallButton onClick={signInWithGoogleHandler}>
                    Sign in with Google
                </SmallButton>
            </CenterCard>
        </Bg>
    );
};

export default LogInComponent;

const Bg = tw.div`
min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef]
`;

const CenterCard = tw.div`
w-full max-w-xl flex flex-col items-center bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8
`;

const AppLogo = tw.img`
h-24 w-44 object-contain mb-2
`;

const Title = tw.div`
text-3xl font-bold text-gray-800 mb-1
`;

const HeadImage = tw.img`
object-cover w- h- mb-4 rounded-lg
`;

const SmallInput = tw.input`
p-3 w-full border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-black
`;

const SmallButton = tw.button`
bg-black text-white text-center p-3 rounded-lg w-full text-base font-semibold transition hover:bg-gray-800
`;

const Divider = tw.div`
text-gray-400 my-3 text-center text-lg font-medium
`;
