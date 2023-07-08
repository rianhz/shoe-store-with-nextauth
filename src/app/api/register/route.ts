import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/userModel";
import { connectDB } from "@/utils/db";

export const POST = async (req: Request) => {
	const { name, email, password, confirmPassword } = await req.json();

	await connectDB();

	if (password !== confirmPassword) {
		return NextResponse.json(
			{
				message: "Passoword should match!",
			},
			{ status: 400, statusText: "Passoword should match!" }
		);
	}
	if (
		name === "" ||
		email === "" ||
		password === "" ||
		confirmPassword === ""
	) {
		return NextResponse.json(
			{
				message: "All fields required!",
			},
			{ status: 400, statusText: "All fields required!" }
		);
	}

	const user = await User.findOne({ email });

	if (user && user.email === email) {
		return NextResponse.json(
			{
				message: "Email already exist",
			},
			{ status: 400, statusText: "Email already exist" }
		);
	}

	const hashedPassowrd = await bcrypt.hash(password, 10);

	await User.create({
		name,
		email,
		password: hashedPassowrd,
	});

	return NextResponse.json(
		{
			message: "Account has been created!",
			status: 201,
		},
		{
			status: 201,
			statusText: "Account has been created!",
		}
	);
};
