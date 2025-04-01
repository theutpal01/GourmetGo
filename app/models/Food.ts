import mongoose, { Schema, Document, Types } from "mongoose";

export interface IFood extends Document {
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
	isAvailable: boolean;
	ingredients?: string[];
	createdAt: Date;
	updatedAt: Date;
}

const FoodSchema = new Schema<IFood>(
	{
		name: { type: String, required: true },
		description: { type: String },
		price: { type: Number, required: true },
		image: { type: String },
		category: { type: String, required: true },
		isAvailable: { type: Boolean, default: true },
		ingredients: [{ type: String }],
	},
	{ timestamps: true }
);

export default mongoose.models.Food || mongoose.model<IFood>("Food", FoodSchema);
