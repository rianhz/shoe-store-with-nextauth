"use client";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { themeContext } from "@/context/ThemeProvider";
import { signInValidationSchema } from "@/validations/signValidation";

interface IFormSignIn {
	email: string;
	password: string;
}

const FormSignIn = () => {
	const router = useRouter();
	const onSubmit = async (values: IFormSignIn, actions: any) => {
		const email = values.email;
		const password = values.password;
		const options = {
			redirect: false,
			email,
			password,
		};

		const isSignIn = await signIn("credentials", options);

		if (isSignIn.error === null) {
			actions.resetForm();
			router.push("/product");
		} else {
			toast.error(isSignIn.error, { duration: 4000 });
		}
	};

	const {
		handleChange,
		handleBlur,
		isSubmitting,
		values,
		errors,
		handleSubmit,
		touched,
	} = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit,
		validationSchema: signInValidationSchema,
	});

	const { theme } = useContext(themeContext);

	return (
		<div
			className={`h-screen flex justify-center items-center transition duration-500 ${
				theme === "dark" && "dark"
			}`}
		>
			<form
				className="w-[350px] flex justify-start items-start gap-4 flex-col border-solid border-2 border-gray-300 rounded-md p-4 mt-10"
				onSubmit={handleSubmit}
			>
				<h1 className="text-[30px] w-full text-center uppercase font-semibold mb-5">
					Sign In
				</h1>
				<div className="w-full">
					<input
						type="text"
						id="email"
						name="email"
						placeholder="rian@gmail.com"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`w-full block rounded-md outline-none px-2 py-1 text-sm  ${
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
						id="password"
						name="password"
						placeholder="Password"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`w-full block rounded-md outline-none px-2 py-1 text-sm  ${
							errors.password && touched.password
								? "border-solid border-2 border-red-500"
								: "border-solid border-2 border-gray-300"
						}`}
					/>
					{errors.password && touched.password && (
						<span className="text-red-500 text-xs">{errors.password}</span>
					)}
				</div>
				<p className="w-full text-xs mt-1">
					Dont have any account? Register
					<Link
						href={"/register"}
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
					{isSubmitting ? <LoadingSpinner /> : "Login"}
				</button>
				<p className="text-center w-full mt-10 mb-3 font-xs text-gray-500">
					or login with
				</p>
				<div className="w-full flex justify-center items-center gap-5">
					<FcGoogle
						onClick={() => signIn("google")}
						className="cursor-pointer rounded-full border-solid border-2 border-gray-300 text-4xl"
					/>
				</div>
			</form>
		</div>
	);
};

export default FormSignIn;
