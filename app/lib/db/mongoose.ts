import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
	throw new Error("Please define the MONGO_URI environment variable in .env");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function dbConnect() {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGO_URI, {
			dbName: "gourmetgo",
			bufferCommands: false,
		}).then((m) => m.connection);
	}

	cached.conn = await cached.promise;
	return cached.conn;
}
