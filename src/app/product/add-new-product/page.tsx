"use client";
import React, { useContext, useMemo } from "react";
import DropzoneCustom from "@/components/Dropzone/DropzoneCustom";
import { themeContext } from "@/context/ThemeProvider";
import { useDropzone } from "react-dropzone";
import { AiFillFolderAdd } from "react-icons/ai";

const page = () => {
	const baseStyle = {
		display: "flex",
		flex: 1,
		flexDirection: "column" as "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
		borderWidth: 2,
		borderRadius: 2,
		borderColor: "#eeeeee",
		borderStyle: "dashed",
		backgroundColor: "rgb(243 244 246)",
		color: "#bdbdbd",
		outline: "none",
		transition: "border .24s ease-in-out",
	};

	const focusedStyle = {
		borderColor: "#2196f3",
	};

	const acceptStyle = {
		borderColor: "#00e676",
	};

	const rejectStyle = {
		borderColor: "#ff1744",
	};

	const {
		getRootProps: getBannerProps,
		getInputProps: GetBannerInputProps,

		isFocused: isFocusedBanner,
		isDragAccept: isDragAcceptBanner,
		isDragReject: isDragRejectBanner,
	} = useDropzone({
		accept: {
			"image/*": [],
		},
		onDrop: (files) => console.log(files),
	});
	const {
		getRootProps: getSlidesProps,
		getInputProps: getSlidesInputProps,
		isFocused: isFocusedSlides,
		isDragAccept: isDragAcceptSlides,
		isDragReject: isDragRejectSlides,
	} = useDropzone({
		accept: {
			"image/*": [],
		},
		onDrop: (files) => console.log(files),
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isFocusedSlides ? focusedStyle : {}),
			...(isDragAcceptSlides ? acceptStyle : {}),
			...(isDragRejectSlides ? rejectStyle : {}),
		}),
		[isFocusedSlides, isDragAcceptSlides, isDragRejectBanner]
	);

	const { theme } = useContext(themeContext);

	return (
		<div
			className={`flex min-h-screen w-full transition duration-500 ${
				theme === "light" ? "bg-gray-100" : "dark"
			}`}
		>
			<div className="p-3 flex justify-center items-center min-h-screen w-full">
				<form className={`w-[400px] bg-white rounded-lg px-4 py-10 text-black`}>
					<h1 className="text-[24px] font-bold uppercase text-center">
						New Product
					</h1>
					<div className="w-full mt-2">
						<label htmlFor="product" className="font-semibold">
							Product
						</label>
						<input
							type="text"
							name="product"
							id="product"
							className="bg-gray-100 w-full mt-1 rounded-md px-2 py-1 outline-none"
						/>
					</div>
					<div className="w-full mt-2">
						<label htmlFor="price " className="font-semibold">
							Price
						</label>
						<input
							type="text"
							name="price"
							id="price"
							className="bg-gray-100 w-full mt-1 rounded-md px-2 py-1 outline-none"
						/>
					</div>
					<div className="w-full mt-2 ">
						<label htmlFor="banner" className="font-semibold">
							Banner
						</label>
						<div {...getBannerProps({ style })}>
							<input type="file" {...GetBannerInputProps()} />
							<AiFillFolderAdd className="mx-auto fill-current text-gray-500" />
							<p className="text-center text-gray-500">Drop product banner</p>
						</div>
					</div>

					<div className="w-full mt-2 ">
						<label htmlFor="slides" className="font-semibold">
							Preview
						</label>
						<div {...getSlidesProps({ style })}>
							<input type="file" {...getSlidesInputProps()} />
							<AiFillFolderAdd className="mx-auto fill-current text-gray-500" />
							<p className="text-center text-gray-500">
								Drop your highlight images, max 5 images
							</p>
						</div>
					</div>
					<button
						type="submit"
						className="uppercase font-semibold text-center bg-sky-500 text-white rounded-lg w-full mt-4 p-2 transition duration-500 hover:bg-sky-400"
					>
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

export default page;
