const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portofolio" : "";

module.exports = withBundleAnalyzer({
	output: "export",
	basePath,
	assetPrefix: isProd ? "/portofolio/" : "",

	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},

	images: {
		unoptimized: true,
	},

	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});

		return config;
	},

	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},
});