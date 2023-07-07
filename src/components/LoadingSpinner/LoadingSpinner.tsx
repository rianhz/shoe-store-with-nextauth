"use client";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import React from "react";

const LoadingSpinner = () => {
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
	return (
		<>
			<Spin indicator={antIcon} />
			<h1>Loading...</h1>
		</>
	);
};

export default LoadingSpinner;
