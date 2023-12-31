"use client";
import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { themeContext } from "@/context/ThemeProvider";

const roboto = Roboto({ weight: "900", subsets: ["latin"] });
const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

const LandingPage = () => {
	const { theme } = useContext(themeContext);

	return (
		<main
			className={`flex transition duration-500 bg-light min-h-[90vh] px-10 items-center justify-center sm:px-2 sm:justify-start ${
				theme === "dark" && "dark"
			}`}
		>
			<div
				className={`flex items-center justify-center rounded-lg transition-all duration-500 min-h-[500px] p-10 gap-3 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full sm:py-4 sm:px-2 ${
					theme === "dark"
						? "dark"
						: "bg-gradient-to-b from-gradient-top via-gradient-mid to-gradient-bottom"
				}`}
			>
				<div className="bg-gray-thin p-4 rounded-md flex flex-col justify-start items-start gap-4 sm:w-full sm:h-full sm:flex flex-col sm:justify-center sm:items-center sm:px-2 sm:py-8">
					<h1
						className={`${roboto.className} text-6xl sm:text-center sm:text-5xl sm:p-2 sm:w-full`}
					>
						Find and choose your fit{" "}
						<strong className="text-orange-500">Shoe</strong>.
					</h1>
					<p
						className={`${poppins.className} font-medium sm:text-center sm:text-xs`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						facere cumque voluptatem corrupti suscipit
					</p>
					<Link
						href={"/login"}
						className="group uppercase mt-3 px-4 py-2 bg-sky-500 w-[160px] flex justify-center items-center rounded-lg font-semibold text-white gap-1 transition duration-500 hover:bg-sky-600"
					>
						Shop Now{" "}
						<BsArrowRight className="stroke-1 transition duration-500 group-hover:translate-x-[10px]" />
					</Link>
				</div>
				<div className="flex justify-center items-center right-content w-[700px] bg-transparent p-3 relative">
					<img
						src={"/brand-landing.jpg"}
						alt="Shoes Market"
						className="imgss z-20 w-[320px] h-[320px] sm:w-[220px] sm:h-[220px]"
					/>
					<div className="w-[325px] h-[325px] rounded-full z-10 bg-gray-400 border-solid border-2 border-gray-400 absolute sm:w-[225px] sm:h-[225px]"></div>
					<div className="w-[335px] h-[335px] rounded-full z-0 bg-transparent shadow-3xl absolute sm:w-[235px] sm:h-[235px]"></div>
				</div>
			</div>
		</main>
	);
};

export default LandingPage;
