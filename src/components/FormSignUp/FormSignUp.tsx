"use client";
import React from "react";
import styles from "./signup.module.css";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { signUpValidationSchema } from "@/validations/signValidation";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
			router.push("/authentication/login");
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

	return (
		<>
			<form className={styles.formContainer} onSubmit={handleSubmit}>
				<h2>Sign Up</h2>
				<div className={styles.inputGroup}>
					<input
						type="text"
						name="name"
						placeholder="Your name"
						onChange={handleChange}
						value={values.name}
						className={errors.name && touched.name ? "input-err" : ""}
						onBlur={handleBlur}
					/>
					{errors.name && touched.name && (
						<span className={styles.errors}>{errors.name}</span>
					)}
				</div>
				<div className={styles.inputGroup}>
					<input
						type="text"
						name="email"
						placeholder="rian@gmail.com"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						className={errors.email && touched.email ? "input-err" : ""}
					/>
					{errors.email && touched.email && (
						<span className={styles.errors}>{errors.email}</span>
					)}
				</div>
				<div className={styles.inputGroup}>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
						className={errors.password && touched.password ? "input-err" : ""}
					/>
					{errors.password && touched.password && (
						<span className={styles.errors}>{errors.password}</span>
					)}
				</div>
				<div className={styles.inputGroup}>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.confirmPassword}
						className={
							errors.confirmPassword && touched.confirmPassword
								? "input-err"
								: ""
						}
					/>
					{errors.confirmPassword && touched.confirmPassword && (
						<span className={styles.errors}>{errors.confirmPassword}</span>
					)}
				</div>
				<p className={styles.linkedSign}>
					Already have account? Sign in
					<Link href={"/authentication/login"}> here</Link>
				</p>
				<button type="submit" disabled={isSubmitting}>
					Register
				</button>
			</form>
		</>
	);
};

export default FormSignUp;
