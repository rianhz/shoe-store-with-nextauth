"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const AsideNav = () => {
	const [searchingText, setSearchingText] = useState<string>("");
	const [searchingProduct, setSearchingProduct] = useState<string>("all");
	const [searchingSelectText, setSearchingSelectText] = useState<string>("");

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearchingSelectText(e.target.value);
	};

	const handleReset = () => {
		setSearchingProduct("all");
		setSearchingSelectText("");
		setSearchingText("");
	};

	return (
		<aside className="w-[240px] min-h-full bg-transparent flex flex-col justify-start items-center gap-3 border-solid border-r-2 border-gray-300 px-2 py-8 ">
			<div className="relative w-full mt-[70px] ">
				<input
					type="text"
					value={searchingText}
					onChange={(e) => setSearchingText(e.target.value)}
					className="w-full outline-none rounded-lg text-[10px] p-2 tracking-wide"
					placeholder="Search product ..."
				/>
				<BiSearch className="absolute right-1 top-0 transform translate-y-[50%]" />
			</div>
			<hr className="bg-gray-300 w-full h-[2px]" />
			<div className="mt-6 flex justify-center items-start flex-col gap-3 w-full">
				<p
					className={`cursor-pointer w-full border-solid border-r-2 ${
						searchingProduct === "all"
							? "border-my-orange"
							: "border-transparent"
					} transition duration-300 hover:border-my-orange`}
					onClick={() => setSearchingProduct("all")}
				>
					All
				</p>
				<p
					className={`cursor-pointer w-full border-solid border-r-2 ${
						searchingProduct === "new"
							? "border-my-orange"
							: "border-transparent"
					} transition duration-300 hover:border-my-orange `}
					onClick={() => setSearchingProduct("new")}
				>
					New Products
				</p>
				<p
					className={`cursor-pointer w-full border-solid border-r-2 ${
						searchingProduct === "low"
							? "border-my-orange"
							: "border-transparent"
					} transition duration-300 hover:border-my-orange`}
					onClick={() => setSearchingProduct("low")}
				>
					Lower Price
				</p>
				<p
					className={`cursor-pointer w-full border-solid border-r-2 ${
						searchingProduct === "high"
							? "border-my-orange"
							: "border-transparent"
					} transition duration-300 hover:border-my-orange`}
					onClick={() => setSearchingProduct("high")}
				>
					Higher Price
				</p>
				<select defaultValue={searchingSelectText} onChange={handleSelect}>
					<option value="" disabled hidden>
						Category
					</option>
					<option value="male" onClick={() => setSearchingText("male")}>
						Male
					</option>
					<option value="female" onClick={() => setSearchingText("female")}>
						Female
					</option>
				</select>
			</div>
			<button
				className="w-full rounded-md bg-sky-500 uppercase mt-4"
				onClick={handleReset}
			>
				Reset
			</button>
		</aside>
	);
};

export default AsideNav;
