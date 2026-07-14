

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
        
            <div className="flex justify-center items-center border-2 border-solid p-6 gap-6 bg-gray-50 border-green-700 w-full min-h-screen">
                <div>
                <Sidebar />
                </div>
                
            <div className="flex-1 border-solid border-gray-200 rounded-xl bg-white p-6 shadow-sm">
            <div> 
            {/* className="flex-1 border-solid border-gray-200 rounded-xl bg-white p-4 shadow-sm" */}
            <p className="bg-blue-300 mb-4 text-2xl text-center rounded">Membership Profile</p>
            </div>
            <div className="p-2">
                <h3 className="text-lg font-bold">Name: {member.first_name} {member.last_name}</h3>
                <p className="text-sm">Membership Status: {member.status}</p>
                <p className="text-sm">Member Email: {member.email}</p>
                <p className="text-sm">Member Phone Number: {member.phone}</p>

            </div>
            <div className="border-2 border-solid rounded-xl text-center bg-blue-300 mb-2 w-40">
                <Link href={`/crm/member-search/${member.id}/edit`}>
                Edit Member
                </Link>
            </div>
            <div className="border-2 border-solid text-center rounded-xl bg-red-300 w-40">
            <form action={requestArchiveAction}>
                <button type="submit">
                    Request Archive
                </button>
            </form>
            </div>
            <div className="text-color-red">
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
        
    )
} 