"use client";
import { themeContext } from "@/context/ThemeProvider";
import React, { useContext } from "react";

const Footer = () => {
	const { theme } = useContext(themeContext);
	return (
		<footer
			className={`w-full h-[40px] flex justify-center items-center ${
				theme === "dark" ? "dark text-light" : "bg-light"
			}`}
		>
			©2023 <strong className="ms-1"> Rian Hidayat</strong>. All rights
			reserved.
		</footer>
	);
};

export default Footer;
