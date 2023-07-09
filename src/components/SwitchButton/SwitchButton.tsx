"use client";
import React, { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { themeContext } from "@/context/ThemeProvider";

const SwitchButton: React.FC = () => {
	const { theme, setTheme } = useContext(themeContext);

	return (
		<div
			className={`border-solid border-2 border-gray-400 px-2 py-1 flex justify-start items-center gap-2 transition duration-500 cursor-pointer relative rounded-lg sm:mb-10 ${
				theme === "light" ? "bg-black" : "bg-white "
			}`}
			onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
		>
			<div
				className={`bg-white border-solid border-2 border-gray-300 absolute rounded-full w-[15px] h-[15px] transition duration-500 ${
					theme === "light"
						? "transform translate-x-[-3px]"
						: "transform translate-x-[102%]"
				}`}
			></div>
			<FaSun
				style={{
					color: "orange",
					fontSize: "10px",
				}}
			/>
			<BsFillMoonStarsFill
				style={{
					color: "orange",
					fontSize: "10px",
				}}
			/>
		</div>
	);
};
export default SwitchButton;
