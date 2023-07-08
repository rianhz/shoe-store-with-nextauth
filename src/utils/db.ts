import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(process.env.DB_URI);
	} catch (error) {
		throw new Error("Failed to connect database!");
	}
};
