import {pool} from "@/lib/db";

export async function getMembers() {
    const result = await pool.query(`
        SELECT id, first_name, last_name, email, phone, status
        FROM members
        ORDER BY id DESC`);
    return result.rows;
} 