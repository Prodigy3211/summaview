import {pool} from "@/lib/db";


// Get all the members

export async function getMembers(query: string ="") {
    const search = `%${query}`;
    const result = query ? await pool.query(`
        SELECT id, first_name, last_name, email, phone, status
        FROM members
        WHERE first_name ILIKE $1
            OR last_name ILIKE $1
            OR email ILIKE $1
            OR phone ILIKE $1
            OR status ILIKE $1
        ORDER BY last_name ASC`,
        [search]
    )

: await pool.query(
    `
    SELECT id, first_name, last_name, phone, email, status
    FROM members
    ORDER BY last_name ASC
    `
);
    return result.rows;
}

//Get specific member

export async function getMembersById(id: string) {
    const result = await pool.query(
        `
        SELECT id, first_name, last_name, email, phone, status
        FROM members
        WHERE id = $1
        `,
        [id]
    );
    return result.rows[0];
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
        VALUES ($1, $2, $3, $4, $5)
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

//Update Member

export type UpdateMember = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}

export async function updateMember(id: string, member: UpdateMember) {
    const result = await pool.query (
        `
        UPDATE members
        SET
            first_name =$1,
            last_name = $2,
            email = $3,
            phone = $4,
            status = $5
        WHERE id = $6
        RETURNING id, first_name, last_name, email, phone, status
        `,
        [
            member.firstName,
            member.lastName,
            member.email,
            member.phone,
            member.status,
            id,
        ]
    );
    return result.rows[0];
}