/** @format */

import { BellIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/router";

const Header: React.FunctionComponent = () => {
    const [user] = useAuthState(auth);
    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showSafety, setShowSafety] = useState(false); // NEW
    const [customNumber, setCustomNumber] = useState<string>(() => {
        // Load from localStorage if available
        if (typeof window !== "undefined") {
            return localStorage.getItem("emergencyNumber") || "";
        }
        return "";
    });
    const [inputNumber, setInputNumber] = useState(customNumber);

    const profileRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const safetyRef = useRef<HTMLDivElement>(null); // NEW
    const router = useRouter();

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                profileRef.current && !profileRef.current.contains(event.target as Node)
            ) {
                setShowProfile(false);
            }
            if (
                notificationRef.current && !notificationRef.current.contains(event.target as Node)
            ) {
                setShowNotifications(false);
            }
            if (
                safetyRef.current && !safetyRef.current.contains(event.target as Node)
            ) {
                setShowSafety(false);
            }
        };
        if (showProfile || showNotifications || showSafety) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showProfile, showNotifications, showSafety]);

    // Save custom number to localStorage
    const saveCustomNumber = () => {
        setCustomNumber(inputNumber);
        if (typeof window !== "undefined") {
            localStorage.setItem("emergencyNumber", inputNumber);
        }
    };

    const userSignedOutHandler = (event: React.SyntheticEvent) => {
        if (user) {
            auth.signOut();
        }
    };

    // Sync inputNumber with customNumber when modal opens or customNumber changes
    useEffect(() => {
        setInputNumber(customNumber);
    }, [showHelp, customNumber]);

    return (
        <header className='sticky top-0 z-50 bg-black min-h-[74px] border-b-2 border-gray-200 shadow-md'>
            <div className='max-w-[1300px] mx-auto flex items-center justify-between px-4'>
                <div className='flex items-center space-x-4'>
                    <div
                        className='flex w-[11rem] relative items-center h-[5rem] cursor-pointer my-auto'
                        onClick={() => router.reload()}
                    >
                        <Link href='/'>
                            <Image
                                src='/images/vello.png'
                                alt='VeloTrack Logo'
                                layout='fill'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    {/* Safety Button */}
                    <div className="relative" ref={safetyRef}>
                        <p
                            className='link-button cursor-pointer'
                            onClick={() => setShowSafety((prev) => !prev)}
                        >
                            Safety
                        </p>
                        {showSafety && (
                            <div className="absolute left-0 mt-10 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-6 animate-fade-in">
                                <div className="font-bold text-lg text-gray-800 mb-2">Safety Precautions</div>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base">
                                    <li>Always verify your driver and vehicle before starting your ride.</li>
                                    <li>Share your trip details with a trusted contact.</li>
                                    <li>Use the in-app emergency button if you feel unsafe at any time.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <p
                        className='link-button cursor-pointer'
                        onClick={() => setShowHelp(true)}
                    >
                        Help
                    </p>
                </div>

                <div className='flex items-center space-x-6'>
                    {/* Notification Bell */}
                    <div className='relative hidden md:inline-flex' ref={notificationRef}>
                        <BellIcon
                            className='h-7 cursor-pointer text-white'
                            onClick={() => setShowNotifications((prev) => !prev)}
                        />
                        {showNotifications && (
                            <div className="absolute right-0 mt-10 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-6 animate-fade-in">
                                <div className="font-bold text-lg text-gray-800 mb-2">Notifications</div>
                                <div className="text-gray-500 text-sm text-center py-8">
                                    No notifications yet.<br />
                                    (This space is reserved for future phone/app notifications.)
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Profile Dropdown */}
                    <div className='flex relative' ref={profileRef}>
                        <img
                            onClick={() => setShowProfile((prev) => !prev)}
                            className='rounded-full cursor-pointer h-[40px] w-[40px] border-2 border-white hover:ring-2 hover:ring-[#6366f1] transition'
                            src={user?.photoURL ? user?.photoURL : "/images/tem-img.png"}
                            alt='User'
                        />
                        {showProfile && (
                            <div className="absolute right-0 mt-12 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-7 animate-fade-in">
                                <div className="flex flex-col items-center">
                                    <img
                                        className="rounded-full h-20 w-20 border-2 border-[#6366f1] mb-3"
                                        src={user?.photoURL ? user.photoURL : "/images/tem-img.png"}
                                        alt="User"
                                    />
                                    <div className="font-bold text-xl text-gray-800 mb-1">{user?.displayName || "Customer"}</div>
                                    <div className="text-base text-gray-500 mb-1">{user?.email || "No email"}</div>
                                    <div className="text-sm text-[#6366f1] font-semibold mb-3">Role: Customer</div>
                                    <button
                                        onClick={userSignedOutHandler}
                                        className="mt-2 px-5 py-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg text-base font-semibold transition"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Help Modal */}
            {showHelp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90vw] max-w-md relative">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                            onClick={() => setShowHelp(false)}
                        >
                            &times;
                        </button>
                        <div className="font-bold text-xl text-gray-800 mb-4">Emergency Help</div>
                        <div className="mb-4">
                            <div className="text-gray-700 mb-2">Police Helpline:</div>
                            <a
                                href="tel:100"
                                className="block text-lg font-semibold text-red-600 underline mb-2"
                            >
                                Call 100
                            </a>
                        </div>
                        <div className="mb-4">
                            <div className="text-gray-700 mb-2">Your Emergency Number:</div>
                            <input
                                type="tel"
                                className="border rounded-lg px-3 py-2 w-full mb-2"
                                placeholder="Enter custom emergency number"
                                value={inputNumber}
                                onChange={e => setInputNumber(e.target.value)}
                            />
                            <button
                                className="bg-[#6366f1] text-white px-4 py-2 rounded-lg font-semibold"
                                onClick={saveCustomNumber}
                            >
                                Save Number
                            </button>
                            {customNumber && (
                                <a
                                    href={`tel:${customNumber}`}
                                    className="block mt-3 text-lg font-semibold text-blue-600 underline"
                                >
                                    Call {customNumber}
                                </a>
                            )}
                        </div>
                        <div className="text-xs text-gray-400 text-center">
                            Your custom number is stored only in your browser for quick access.
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
