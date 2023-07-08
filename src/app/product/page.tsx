"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Product = () => {
	const { status, data } = useSession();
	const router = useRouter();

	console.log({ status, data });

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/login");
		}
	}, [status]);

	return <div>Product</div>;
};

export default Product;
