import * as Yup from "yup";

const regexName = new RegExp(/[A-Za-z]/);
const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export const signUpValidationSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required!")
		.email("Please enter valid email!"),
	name: Yup.string()
		.required("Name is required!")
		.matches(regexName, "Number is not allowed"),
	password: Yup.string()
		.required("Password is required!")
		.min(3, "Password should more than 3 characters")
		.max(20, "Password should less than 20 characters"),
	confirmPassword: Yup.string()
		.required("Password is required!")
		.oneOf([Yup.ref("password"), null], "Password should match!"),
});

export const signInValidationSchema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required!")
		.email("Please enter valid email!"),

	password: Yup.string()
		.required("Password is required!")
		.min(3, "Password should more than 3 characters")
		.max(20, "Password should less than 20 characters"),
});
