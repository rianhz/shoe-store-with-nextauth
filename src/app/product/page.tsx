"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const Product = () => {
	const { status, data } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/login");
		}
	}, [status]);

	return (
		<div>
			{status === "loading" && <LoadingSpinner />}
			Product
		</div>
	);
};

export default Product;
