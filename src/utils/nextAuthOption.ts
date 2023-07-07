import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "./db";

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/authentication/login",
		signOut: "/",
	},

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
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
			async authorize(credentials, req) {
				await connectDB();

				const email = credentials?.email;
				const password = credentials?.password;

				if (!email || !password) {
					return null;
				}

				try {
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
							NextResponse.json(
								{ message: "Wrong password" },
								{ status: 404, statusText: "Wrong password" }
							);
							throw new Error("Wrong credentials");
						}
					}
				} catch (error: any) {
					throw new Error(error.message);
				}
			},
		}),
	],
};
