import mongoose, { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
	name: string;
	email: string;
	password: string;
}

export const userModel = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User =
	(mongoose.models.User as mongoose.Model<UserDoc>) ||
	mongoose.model<UserDoc>("User", userModel);

export default User;
