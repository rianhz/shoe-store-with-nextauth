"use client";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { signUpValidationSchema } from "@/validations/signValidation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { themeContext } from "@/context/ThemeProvider";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface IFormSignUp {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const FormSignUp = () => {
	const router = useRouter();

	const onSubmit = async (values: IFormSignUp, actions: any) => {
		const res = await fetch("/api/register", {
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(actions);
		console.log(res);

		if (!res.ok) {
			return toast.error(res.statusText, {
				duration: 3000,
			});
		}

		actions.resetForm();

		toast.success(res.statusText, {
			duration: 3000,
		});

		setTimeout(() => {
			router.push("/login");
		}, 1500);
	};
	const {
		touched,
		errors,
		handleBlur,
		handleChange,
		values,
		handleSubmit,
		isSubmitting,
	} = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: signUpValidationSchema,
		onSubmit,
	});

	const { theme } = useContext(themeContext);

	return (
		<div
			className={`h-screen flex justify-center items-center transition duration-500 ${
				theme === "dark" && "dark"
			}`}
		>
			<form
				className="w-[350px] flex justify-start items-start gap-4 flex-col border-solid border-2 border-gray-300 rounded-md p-4"
				onSubmit={handleSubmit}
			>
				<h1 className="text-[30px] w-full text-center uppercase font-semibold mb-5">
					Sign Up
				</h1>
				<div className="w-full">
					<input
						type="text"
						name="name"
						placeholder="Your name"
						onChange={handleChange}
						value={values.name}
						className={`w-full block rounded-md outline-none px-2 py-1 text-sm text-black  ${
							errors.name && touched.name
								? "border-solid border-2 border-red-500"
								: "border-solid border-2 border-gray-300"
						}`}
						onBlur={handleBlur}
					/>
					{errors.name && touched.name && (
						<span className="text-xs text-red-500 ">{errors.name}</span>
					)}
				</div>
				<div className="w-full">
					<input
						type="text"
						name="email"
						placeholder="rian@gmail.com"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						className={`w-full block rounded-md outline-none px-2 py-1 text-sm text-black ${
							errors.email && touched.email
								? "border-solid border-2 border-red-500"
								: "border-solid border-2 border-gray-300"
						}`}
					/>
					{errors.email && touched.email && (
						<span className="text-red-500 text-xs">{errors.email}</span>
					)}
				</div>
				<div className="w-full">
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
						className={`w-full block rounded-md outline-none px-2 py-1 text-sm text-black ${
							errors.password && touched.password
								? "border-solid border-2 border-red-500"
								: "border-solid border-2 border-gray-300"
						}`}
					/>
					{errors.password && touched.password && (
						<span className="text-red-500 text-xs">{errors.password}</span>
					)}
				</div>
				<div className="w-full ">
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.confirmPassword}
						className={`w-full block rounded-md outline-none px-2 py-1 text-sm text-black ${
							errors.confirmPassword && touched.confirmPassword
								? "border-solid border-2 border-red-500"
								: "border-solid border-2 border-gray-300"
						}`}
					/>
					{errors.confirmPassword && touched.confirmPassword && (
						<span className="text-red-500 text-xs">
							{errors.confirmPassword}
						</span>
					)}
				</div>
				<p className="w-full text-xs mt-1">
					Already have account? Sign in
					<Link
						href={"/authentication/login"}
						className="underline lowercase text-blue-300"
					>
						{" "}
						here
					</Link>
				</p>
				<button
					type="submit"
					disabled={isSubmitting}
					className={`mt-3 flex justify-center items-center gap-2 w-full py-1 px-2 text-white uppercase rounded-md transition duration-500 ${
						isSubmitting
							? "disabled:opacity-50 bg-gray-200 text-black"
							: "bg-sky-500 hover:bg-sky-600 "
					}`}
				>
					{isSubmitting ? <LoadingSpinner /> : "Register"}
				</button>
			</form>
		</div>
	);
};

export default FormSignUp;
