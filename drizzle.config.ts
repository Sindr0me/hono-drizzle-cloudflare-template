import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	driver: "d1-http",
	out: "drizzle",
	schema: "./src/db/schema.ts",
	// dbCredentials needs only for connect drizzle studio
	dbCredentials: {
		accountId: "acc id token",
		databaseId: "db id to connect",
		token: "your access token from CF",
	},
});
// https://github.com/drizzle-team/drizzle-kit-mirror/releases/tag/v0.21.3
// creating token https://dash.cloudflare.com/profile/api-tokens
