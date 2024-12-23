'use client'
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import korelogo from "../public/koreconx.svg";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

export default function Home() {
    const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
    const [isTimeUp, setIsTimeUp] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2025-01-07T00:00:00-05:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({days: "00", hours: "00", minutes: "00", seconds: "00"});
                setIsTimeUp(true);
            } else {
                const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
                const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
                const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
                const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

                setTimeLeft({days, hours, minutes, seconds});
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex w-full flex-col gap-8 row-start-2 justify-start items-center">
                <div className="w-full flex justify-center items-center">
                    <Image src={korelogo} alt={"Kore logo"}/>
                </div>
                <div className="flex w-full flex-wrap gap-4 justify-center items-center">
                    <h1 className="text-2xl font-black text-center text-lime-400 typing-effect animate-pulse">
                        <TypewriterComponent
                            options={{
                                strings: ["KoreWorkers Present...", "Oscar Freeloader!", "If we don't receive", "Our overdue wages!", "All of Kore's codes", "have become 'open source'."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <div className="flex w-full gap-2 justify-center items-center">
                    <div className="text-2xl font-black lg:min-w-[90px] bg-gray-900 border-2 border-lime-400 p-4 rounded text-lime-400">
                        <div className="flex justify-center flex-col gap-2 animate-pulse">
                            <span className={"text-xs text-center"}>DAYS</span>
                            <p className="text-4xl text-center">
                                {timeLeft.days}
                            </p>
                        </div>
                    </div>
                    <div className="text-2xl font-black lg:min-w-[90px] bg-gray-900 border-2 border-lime-400 p-4 rounded text-lime-400">
                        <div className="flex justify-center flex-col gap-2 animate-pulse">
                            <span className={"text-xs text-center"}>HRS</span>
                            <p className="text-4xl text-center">
                                {timeLeft.hours}
                            </p>
                        </div>
                    </div>
                    <div className="text-2xl font-black lg:min-w-[90px] bg-gray-900 border-2 border-lime-400 p-4 rounded text-lime-400">
                        <div className="flex justify-center flex-col gap-2 animate-pulse">
                            <span className={"text-xs text-center "}>MINS</span>
                            <p className="text-4xl text-center">
                                {timeLeft.minutes}
                            </p>
                        </div>
                    </div>
                    <div className="text-2xl font-black lg:min-w-[90px] bg-gray-900 border-2 border-lime-400 p-4 rounded text-lime-400">
                        <div className="flex justify-center flex-col gap-2 animate-pulse">
                            <span className={"text-xs text-center"}>SECS</span>
                            <p className="text-4xl text-center">
                                {timeLeft.seconds}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 border-2 border-lime-400 p-4 rounded max-w-[720px] animate-pulse">
                    <p className={"text-lime-400 text-sm text-justify"}>
                        If all Kore employees, including those who were recently laid off, are not paid by 00:00 on
                        January 7, 2025, Canadian time, we will release a GitHub link on this website containing all the
                        code already developed by Kore, along with a dump of the production database containing all
                        customer data.
                    </p>
                    <p className={"text-lime-400 text-sm text-justify py-2"}>
                        It is very easy to take advantage of foreign workers since we have no legal means to defend
                        ourselves. However, this scenario also applies to you.
                    </p>
                    <p className={"text-lime-400 text-sm text-justify py-2"}>
                        If everyone is paid by the deadline, this website will be taken down, but we may reactivate it
                        under the following circumstances:
                    </p>
                    <ul className={"text-lime-400 text-sm text-justify list-disc list-inside mx-4 my-4"}>
                        <li>If salaries are delayed again, and Oscar does not come to us with an explanation.</li>
                        <li>If any team member is fired due to this protest letter.</li>
                    </ul>
                    <p className={"text-lime-400 text-sm text-justify py-2"}>
                        Just like you, Oscar, we have families and bills to pay. It is very easy to spend $2,000 at a
                        restaurant or spend absurd amounts to watch Formula 1 races, while we are struggling with water,
                        electricity, credit card bills, and other debts. Remember that interest rates in underdeveloped
                        countries are extremely high, and many of us have had to take out loans, paying 2 to 3 times the
                        amount we contracted because of these months without receiving our payments. A little extra to
                        cover these costs would be greatly appreciated. For many of us, this will be the worst Christmas
                        of our lives. We have families, and just like you, we need to eat.
                    </p>
                </div>
                <div className="w-full flex justify-center items-center max-w-[720px]">
                    <Link href={`${isTimeUp ? "https://github.com/koreworkers/paykoreworkers" : ""}`}
                        className={`${isTimeUp ? "bg-lime-400 hover:bg-lime-600 ": "bg-gray-500 cursor-none"} w-full text-gray-900 font-bold py-4 px-8 rounded text-center`}
                     >
                        <span
                            className={"animate-pulse"}>{isTimeUp ? "We are sad about not receiving our payment, but you deserve to be happy. Download all Kore's code." : "I'll wait a little bit, soon I’ll be able to be clicked."}</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}
