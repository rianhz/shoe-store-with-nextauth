"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import SwitchButton from "../SwitchButton/SwitchButton";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
	const location = usePathname();
	const { status } = useSession();

	return (
		<nav className="h-[65px] flex justify-between items-center w-full px-[50px] py-[2px] bg-black text-white">
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

			<div className="flex justify-center items-center gap-10">
				<SwitchButton />
				<Link
					href={"/"}
					className={`pb-[4px] ${location === "/" ? "active" : "disabled"}`}
				>
					home
				</Link>
				<Link
					href={"/product"}
					className={`pb-[4px] ${
						location === "/products" ? "active" : "disabled"
					}`}
				>
					products
				</Link>
				<Link
					href={"/order"}
					className={`pb-[4px] ${
						location === "/order" ? "active" : "disabled"
					}`}
				>
					order
				</Link>
				<Link
					href={"/contact"}
					className={`pb-[4px] ${
						location === "/contact" ? "active" : "disabled"
					}`}
				>
					contact
				</Link>
			</div>
			{status === "authenticated" ? (
				<button className="" onClick={() => signOut()}>
					Log out
				</button>
			) : (
				<Link className="" href={"/authentication/login"}>
					Sign in
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
