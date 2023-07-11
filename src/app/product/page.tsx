"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import AsideNav from "@/components/SideNavProduct/AsideNav";
import { themeContext } from "@/context/ThemeProvider";

const Product = () => {
	const { status } = useSession();
	const router = useRouter();

	// useEffect(() => {
	// 	if (status === "unauthenticated") {
	// 		router.push("/login");
	// 	}
	// }, []);

	const { theme } = useContext(themeContext);

	return (
		<div
			className={`flex min-h-screen w-full transition duration-500 ${
				theme === "light" ? "bg-gray-100" : "dark"
			}`}
		>
			<AsideNav />
			<div className="bg-transparent text-black grow">
				<h1>asd</h1>
			</div>
		</div>
	);
};

export default Product;
