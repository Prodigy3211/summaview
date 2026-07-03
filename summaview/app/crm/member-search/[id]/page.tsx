

import Sidebar from "@/components/layout/Sidebar";
import Button from "@/components/Button";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requestMemberArchive } from "@/lib/members";
import { getMembersById } from "@/lib/members";

//This Page is displaying a mebership profile

export default async function Memberview( {
    params,
}: {
    params: Promise <{id: string}>;
}) {
    const {id}  = await params;

    // const results = await pool.query(
    //     `SELECT *
    //     FROM members
    //     WHERE id = $1
    //     `,
    // [id]
    // )

    
    const member = await getMembersById(id); //Should probably remove the sql here and use getMembersbyId

    if(!member) notFound();

//Use the server to request an archive for this profile
    async function requestArchiveAction(){
        "use server";
        
        await requestMemberArchive(id);

        redirect(`/crm/member-search/${id}`);
    }

    return (
        <div>
            <div className="flex-row">
                <div>
                    <Sidebar />
                </div>
            <div>
            <div>
            <p className="bg-blue-300 text-2xl text-center">Membership Profile</p>
            </div>
            <div>
                <p>Name: {member.first_name} {member.last_name}</p>
                <p>Membership Status:{member.status}</p>
                <p>Member Email: {member.email}</p>
                <p>Member Phone Number: {member.phone}</p>

            </div>
            <div>
                <Link href={`/crm/member-search/${member.id}/edit`}>
                Edit Member
                </Link>
            </div>
            <form action={requestArchiveAction}>
                <button type="submit">
                    Request Archive
                </button>
            </form>
            <div>
                {member.archive_requested && !member.archived && (
        <p>Archive request pending admin approval.</p>
    )
    }

    {member.archived && (
        <p>This Member Has been Archived</p>
    )}
            </div>
            <div>
                
                {/* <Button
                label="Edit Member information"
                variant="primary"
                onClick= {()=> void 0}
                >
                </Button> */}
            </div>
            </div>
        </div>
        </div>
    )
} 