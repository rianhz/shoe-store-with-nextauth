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
		padding: "20px",
		borderWidth: 2,
		borderRadius: 2,
		borderColor: "#eeeeee",
		borderStyle: "dashed",
		backgroundColor: "#fafafe",
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
		getRootProps,
		getInputProps,
		isDragActive,
		isFocused,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: {
			"image/*": [],
		},
	});

	console.log(getInputProps());

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	);
	const { theme } = useContext(themeContext);

	return (
		<div
			className={`flex min-h-screen w-full transition duration-500 ${
				theme === "light" ? "bg-gray-100" : "dark"
			}`}
		>
			<div className="p-3 flex justify-center items-center min-h-screen grow">
				<form className="w-[400px] bg-gray-100">
					<h1>Add New Product</h1>
					<div className="w-full mt-2">
						<label htmlFor="product-name">Product Name</label>
						<input type="text" name="product-name" id="product-name" />
					</div>
					<div className="w-full mt-2">
						<label htmlFor="product-name">Product Name</label>
						<input type="text" name="product-name" id="product-name" />
					</div>
					<div className="w-full mt-2">
						<label htmlFor="product-banner">Product Banner</label>
						<div {...getRootProps({ style })}>
							<input type="file" {...getInputProps()} />
							<AiFillFolderAdd />
							<p>Drag 'n' drop some files here</p>
						</div>
					</div>
					<div className="w-full mt-2">
						<label htmlFor="product-name">Product Name</label>
						<input type="text" name="product-name" id="product-name" />
					</div>
					<div className="w-full mt-2">
						<label htmlFor="product-slides">Product Slides</label>
						<div {...getRootProps({ style })}>
							<input type="file" {...getInputProps()} />
							<AiFillFolderAdd />
							<p>Drag 'n' drop some files here</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
