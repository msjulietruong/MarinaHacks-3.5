import Image from 'next/image'
import style from "@/styles/landing.module.css";
import React, { useState } from 'react';

export const Info = () => {
    const [showChatBubble, setShowChatBubble] = useState(false);

    const toggleChatBubble = () => {
        setShowChatBubble(!showChatBubble);
    };
    return (

    <div id="home" className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <div className={"absolute right-15 top-100" + style.mediumbtn}
                 onMouseEnter={() => setShowChatBubble(true)}  // Show chat bubble when mouse enters container
                 onMouseLeave={() => setShowChatBubble(false)} // Hide chat bubble when mouse leaves container
            >
                <Image
                    src={"/images/web-anim/simplified.png"}
                    alt="Clickable shark"
                    width="1000"
                    height="1500"
                    className="responsive h-full w-full object-cover"
                    style = {{opacity: 0}}
                />
                {/* Show the chat bubble conditionally */}
                {showChatBubble && (
                    <div className={"absolute top-0 right-0 " + style.bubble}>
                        <Image src="/images/web-anim/bubble.png" alt="Shark bubble" width="550" height="150"  />
                    </div>
                )}
            </div>
            <Image
                src={"/images/web-anim/landing-shark.png"}
                alt='background'
                width="7560"
                height="4904"
                className="object-contain"
            />
            <Image
                alt='wic logo'
                src={"/images/web-anim/WiC-logo-black.png"}
                width="125"
                height="115"
                className={style.logo}
            />
            <Image
                alt='MarinaHacks 3.5 Logo'
                src={"/images/web-anim/MH-3.5-logo.png"}
                width="685"
                height="500"
                className={style.logoo}
            />
            <h1 className="text-6xl font-bold text-mhpurple-400">
                April 21st - 22rd, 2023
            </h1>
        </div>
        <div className="flex justify-center items-center gap-24">
            <div
                className=" flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
                <h1 className="text-2xl pb-6">
                    Attend MarinaHacks 3.0
                </h1>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfLktsjhdhQil4zA0cEiXslVB_OATcziWzM8d66v2YLpL1W8A/closedform'>
                <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
                    Apply Now
                </button>
            </a>
        </div>
        <div
            className=" flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
                    <h1 className="text-2xl pb-6">
                        Volunteer at MarinaHacks 3.0
                    </h1>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf0nTpt80nF6AcJYCSSpwemOtVZlxumAgxxGqzYO0TFIm9C1A/closedform'>
                        <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
                            Apply Now
                        </button>
                    </a>
                </div>
            </div>
            <div className="text-mhpurple-400 font-bold flex flex-col gap-8 w-5/6">
                <p className="text-2xl">
                    {"Women in Computing is hosting MarinaHacks: California State University.-Long Beach's annual women-centric hackathon- This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry-"}
                </p>
                <h1 className="text-5xl">
                    Marinahacks 3.0
                </h1>
                <p className="text-2xl">
                    {"This year's MarinaHacks will take place as fully in person 24-hour event from April 22-23rd in the CSULB USU Ballrooms. You will be able to win prizes, network with other students, attend workshops (i.e. Google, Cisco, etc.), in order to build your resume and most importantly have fun!"}
                </p>
            </div>
        </div>
    )
}