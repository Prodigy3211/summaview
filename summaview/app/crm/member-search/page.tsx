import Link from "next/link";
import { pool } from "@/lib/db";
import MemberSearchForm from "@/components/members/MemberSearchForm";
import { getMembers } from "@/lib/members";

// List of Members

export default async function memberList ({
    searchParams,
}:{
    searchParams: Promise<{ q? : string}>;
})
{
    const { q } = await searchParams;
    const query = q?.trim() ?? "";
    
    
    // const result = query
    // ? await pool.query(`
    //     SELECT *
    //     FROM members
    //     WHERE first_name ILIKE $1
    //         OR last_name ILIKE $1
    //         OR email ILIKE $1
    //         or phone ILIKE $1
    //     ORDER BY id DESC
    //     `,
    //     [`%${query}%`]
    // )
    // :await pool.query(`
    //     SELECT *
    //     FROM members
    //     `);

    const members = await getMembers(query);

    return (
        <main>
           
            <Link href="/crm/member-search/new">
            <h2>Create New Member</h2>
            </Link>
            <MemberSearchForm query="query" />
             <h1 className="text-center text-xl">
                Member Search
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