import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
	name: string;
	email: string;
	password?: string;
	image?: string;
	isProfileComplete: boolean;
	phone?: string;
	address?: {
		street: string;
		city: string;
		state: string;
		zipCode: string;
		country: string;
	};
	role: "customer" | "admin";
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String },
		image: { type: String },
		isProfileComplete: { type: Boolean, default: false },
		phone: { type: String },
		address: {
			street: { type: String },
			city: { type: String },
			state: { type: String },
			zipCode: { type: String },
			country: { type: String },
		},
		role: { type: String, enum: ["customer", "admin"], default: "customer" },
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
