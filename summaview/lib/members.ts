import {pool} from "@/lib/db";
import { Nerko_One } from "next/font/google";
import { Result } from "pg";



export async function getMembers() {
    const result = await pool.query(`
        SELECT id, first_name, last_name, email, phone, status
        FROM members
        ORDER BY id DESC`);
    return result.rows;
}

//Inserts a new member into the Database, connects with the new folder under membersearch

export type CreateMember = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}


export async function createMember(member: CreateMember){
    const result = await pool.query(`
        INSERT INTO members (
        first_name,
        last_name,
        email,
        phone,
        status
        )
        VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
        )
        RETURNING id 
        `,
        [
        member.firstName,
        member.lastName,
        member.email,
        member.phone,
        member.status,
        ]
    );
    return result.rows[0];
}