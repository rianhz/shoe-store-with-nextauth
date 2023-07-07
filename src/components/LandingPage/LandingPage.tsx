"use client";
import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./landing.css";
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
			className={`flex transition duration-500 bg-light h-[90vh] px-10 items-center justify-center ${
				theme === "dark" && "dark"
			}`}
		>
			<div
				className={`flex items-center justify-center rounded-lg transition-all duration-500 h-[500px] p-10 gap-3 ${
					theme === "dark"
						? "dark"
						: "bg-gradient-to-b from-gradient-top via-gradient-mid to-gradient-bottom"
				}`}
			>
				<div className="bg-gray-thin p-4 rounded-md flex flex-col justify-start align-start gap-4 ">
					<h1 className={`${roboto.className} text-6xl`}>
						Find and choose your fit{" "}
						<strong
							style={{
								color: "orange",
							}}
						>
							Shoe
						</strong>
						.
					</h1>
					<p className={`${poppins.className} font-medium`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						facere cumque voluptatem corrupti suscipit
					</p>
					<Link
						href={"/authentication"}
						className="group uppercase mt-3 px-4 py-2 bg-sky-500 w-[160px] flex justify-center items-center rounded-lg font-semibold text-white gap-1 transition duration-500 hover:bg-sky-600"
					>
						Shop Now{" "}
						<BsArrowRight className="stroke-1 transition duration-500 group-hover:translate-x-[10px]" />
					</Link>
				</div>
				<div className="flex justify-center items-center right-content w-[700px] bg-transparent p-3 relative">
					<img src={"/brand-landing.jpg"} alt="Shoes Market" className="z-20" />
					<div className="w-[325px] h-[325px] rounded-full z-10 bg-gray-400 border-solid border-2 border-gray-400 absolute"></div>
					<div className="w-[335px] h-[335px] rounded-full z-0 bg-transparent shadow-3xl absolute"></div>
				</div>
			</div>
		</main>
	);
};

export default LandingPage;
