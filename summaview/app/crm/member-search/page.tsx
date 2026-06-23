import Link from "next/link";
import { pool } from "@/lib/db";

// List of Members

export default async function memberList (){
    const result = await pool.query(`
        SELECT id, first_name, last_name, email, phone, status
        FROM members
        ORDER BY id DESC
        `);

    const members = result.rows;

    return (
        <main>
            <h1>
                Members
            </h1>
            
        {members.map ((member) => (
            <Link key={member.id} href={`/crm/member-search/${member.id}`}>
                <div>
                    <strong>
                        {member.first_name} {member.last_name}
                    </strong>
                    <p>
                        {member.email}
                    </p>
                </div>
            </Link>
        ) )}
        </main>
    );
}