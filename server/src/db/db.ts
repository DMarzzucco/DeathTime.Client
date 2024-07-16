import { Pool } from "pg";

export const BsDate = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "users",
    password: "5599",
    port: 5432
})