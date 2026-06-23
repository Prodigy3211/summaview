import { Pool } from "pg";

const globalFromPg = globalThis as unknown as {
    pgPool?: Pool;
};

export const pool =
    globalFromPg.pgPool ??
    new Pool ({
        connectionString: process.env.DATABASE_URL,
    });

if (process.env.NODE_ENV !== "production"){
    globalFromPg.pgPool = pool;
}