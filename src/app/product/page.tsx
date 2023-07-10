"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Product = () => {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/login");
		}
	}, []);

	return <div>Product</div>;
};

export default Product;
