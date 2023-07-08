import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "./db";

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/login",
		signOut: "/",
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: {
					label: "email",
					type: "text",
				},
				password: {
					label: "password",
					type: "password",
				},
			},
			async authorize(credentials) {
				await connectDB();

				const email = credentials?.email;
				const password = credentials?.password;

				if (!email || !password) {
					throw new Error("All fields is required!");
				}

				const user = await User.findOne({ email: email });

				if (user) {
					const matched = await bcrypt.compare(password, user.password);

					if (matched) {
						return {
							id: user._id,
							name: user.name,
							email: user.email,
						};
					} else {
						throw new Error("Wrong credentials!");
					}
				}
				throw new Error("User not found!");
			},
		}),
	],
};
