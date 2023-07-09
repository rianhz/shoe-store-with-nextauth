"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SwitchButton from "../SwitchButton/SwitchButton";
import { useSession, signOut } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const location = usePathname();
	const { status } = useSession();

	const [sideMenu, setSideMenu] = useState<boolean>(false);

	return (
		<nav className="h-[65px] flex justify-between items-center w-full px-[50px] py-[2px] relative bg-black text-white">
			<Link href={"/"}>
				<Image
					src={"/logo.jpg"}
					alt="JJ-Market"
					width={50}
					height={50}
					style={{
						borderRadius: "50%",
					}}
					priority
				/>
			</Link>

			<div
				className={`flex justify-center items-center gap-10 md:pt-[100px] font-medium transition duration-500 ${
					sideMenu
						? "sm:absolute sm:top-0 sm:right-0 sm:transform translate-x-[0] md:absolute md:top-0 md:right-0 md:transform translate-x-[0]"
						: "sm:absolute sm:top-0 sm:right-0 sm:translate-x-[100%] md:absolute md:top-0 md:right-0 md:transform md:translate-x-[100%]"
				} sm:h-screen sm:z-30 sm:w-[200px] sm:flex-col sm:justify-center sm:items-center sm:gap-4 sm:bg-black md:h-screen md:z-30 md:w-[200px] md:flex-col md:justify-start md:items-center md:gap-4 md:bg-black`}
			>
				<SwitchButton />
				<Link
					href={"/"}
					className={`pb-[4px] border-solid border-b-2 border-transparent hover:border-orange-300 transition duration-500 sm:mt-[40px] md:mt-[60px] ${
						location === "/" ? "active" : ""
					}`}
				>
					home
				</Link>
				<Link
					href={"/product"}
					className={`pb-[4px] border-solid border-b-2 border-transparent hover:border-orange-300 transition duration-500 ${
						location === "/products" ? "active" : ""
					}`}
				>
					products
				</Link>
				<Link
					href={"/order"}
					className={`pb-[4px] border-solid border-b-2 border-transparent hover:border-orange-300 transition duration-500 ${
						location === "/order" ? "active" : ""
					}`}
				>
					order
				</Link>
				<Link
					href={"/contact"}
					className={`pb-[4px] border-solid border-b-2 border-transparent hover:border-orange-300 transition duration-500 lg:mr-20 xxl:mr-20 sm:mr-1 md:mr-1 ${
						location === "/contact" ? "active" : ""
					}`}
					onClick={() => setSideMenu((prev) => !prev)}
				>
					contact
				</Link>
				{status === "authenticated" ? (
					<button className="" onClick={() => signOut()}>
						Log out
					</button>
				) : (
					<Link
						className="text-blue-500 font-bold transition duration-500 hover:text-blue-600 sm:mt-[80px] md:mt-[80px] hover:border-solid border-2 border-transparent pb-[4px]"
						href={"/login"}
					>
						Sign in
					</Link>
				)}
			</div>
			{sideMenu ? (
				<AiOutlineClose
					className={`absolute top-4 right-10 z-40 stroke-1 cursor-pointer w-[2em] h-[2em] hidden sm:block md:block`}
					onClick={() => setSideMenu((prev) => !prev)}
				/>
			) : (
				<GiHamburgerMenu
					className={`absolute top-4 right-10 z-40 stroke-1 cursor-pointer w-[2em] h-[2em] hidden sm:block md:block`}
					onClick={() => setSideMenu((prev) => !prev)}
				/>
			)}
		</nav>
	);
};

export default Navbar;
