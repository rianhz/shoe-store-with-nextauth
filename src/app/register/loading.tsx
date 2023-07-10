import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import React from "react";

const loading = () => {
	return (
		<div className="h-screen flex justify-center items-center gap-2">
			<LoadingSpinner />
		</div>
	);
};

export default loading;
