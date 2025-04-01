import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"plus.unsplash.com",
			
		]
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
