import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "GourmetGo",
	robots: {
		index: true,
		follow: true,
	},
	description: "A basic food ordering app",
	applicationName: "GourmetGo",
	creator: "Utpal",
	icons: [
		{
			url: "/logo.svg",
			sizes: "16x16",
			type: "image/svg"
		}]
};

export const viewport: Viewport = {
	themeColor: "#000000"
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-primary mx-auto w-full h-screen light">
				{children}
			</body>
		</html>
	);
}
