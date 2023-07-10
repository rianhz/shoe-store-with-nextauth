import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home | Shoe Store",
	description: "Home of Shoe Store",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<AuthProvider>
						<Navbar />
						{children}
						<Toaster />
						<Footer />
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
