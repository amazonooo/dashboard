import './db/env-config'
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
	schema: './db/schema.ts',
	out: './db/drizzle.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.POSTGRES_URL!,
	},
})
