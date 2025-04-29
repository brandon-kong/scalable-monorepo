import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";


export const postgresDialect = new PostgresDialect({
	pool: new Pool({
		connectionString: process.env.DATABASE_URL,
	}),
});