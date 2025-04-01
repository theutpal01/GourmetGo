import mongoose, { Schema, Document, Types } from "mongoose";

export interface IOrderItem {
	foodId: string;
	name: string;
	price: number;
	quantity: number;
	specialInstructions?: string;
}

export interface IOrder extends Document {
	userId: Types.ObjectId;
	items: IOrderItem[];
	status: "pending" | "completed" | "cancelled";
	totalPrice: number;
	paymentStatus: "pending" | "paid" | "failed";
	paymentMethod: "cash" | "card" | "upi";
	createdAt: Date;
	updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
		items: [
			{
				foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
				name: { type: String, required: true },
				price: { type: Number, required: true },
				quantity: { type: Number, required: true },
				specialInstructions: { type: String },
			},
		],
		status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
		totalPrice: { type: Number, required: true },
		paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
		paymentMethod: { type: String, enum: ["cash", "card", "upi"], required: true },
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
