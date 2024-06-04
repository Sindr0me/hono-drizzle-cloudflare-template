import { Hono, Context } from "hono";
import { users } from "./db/schema";
import { Environment } from "../bindings";
import { initDbConnect } from "./db/index";

const app = new Hono<Environment>();

app.get("/", async (c: Context<Environment>) => {
	const db = initDbConnect(c.env.DB);
	const allUsers = await db.select().from(users).all();
	console.log(allUsers);
	return c.text("Hello Hono!");
});

app.post("/upload", async (c) => {
	const bucket = c.env.BUCKET;
	const env = c.env.ENV_TYPE;

	// getting file from request
	const formData = await c.req.parseBody();
	const file = formData.file as File;
	if (!file) {
		return c.json({ success: false, message: "No file uploaded" }, 400);
	}

	// Reading file
	const arrayBuffer = await file.arrayBuffer();
	const buffer = new Uint8Array(arrayBuffer);

	// saving file to R2 bucket to directory depends on your env (prod/dev/stage)
	const key = `${env}/uploads/${file.name}`;
	const result = await bucket.put(key, buffer);
	console.log(result);

	return c.json({ success: true, message: "File uploaded successfully", key });
});

export default app;
