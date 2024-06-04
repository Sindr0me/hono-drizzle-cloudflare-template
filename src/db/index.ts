import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export const initDbConnect = (env: D1Database) => drizzle(env, { schema });
