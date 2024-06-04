import { Env } from "hono";

type Environment = Env & {
	Bindings: {
		DB: D1Database;
		BUCKET: R2Bucket;
		ENV_TYPE: "dev" | "prod" | "stage";
	};
};
