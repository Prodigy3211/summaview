import Link from "next/link";
import { pool } from "@/lib/db";
import MemberSearchForm from "@/components/members/MemberSearchForm";

// List of Members

export default async function memberList ({
    searchParams,
}:{
    searchParams: Promise<{ q? : string}>;
})
{
    const { q } = await searchParams;
    const query = q?.trim() ?? "";
    
    
    const result = query
    ? await pool.query(`
        SELECT *
        FROM members
        WHERE first_name ILIKE $1
            OR last_name ILIKE $1
            OR email ILIKE $1
            or phone ILIKE $1
        ORDER BY id DESC
        `,
        [`%${query}%`]
    )
    :await pool.query(`
        SELECT *
        FROM members
        `);

    const members = result.rows;

    return (
        <main>
            <h1>
                Members
            </h1>
            <MemberSearchForm query="query" />
            
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