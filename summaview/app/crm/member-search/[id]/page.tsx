

import Sidebar from "@/components/layout/Sidebar";
import Button from "@/components/Button";
import { notFound } from "next/navigation";
import { pool } from "@/lib/db";

//This Page is displaying a membership profile

export default async function Memberview( {
    params,
}: {
    params: Promise <{id: string}>;
}) {
    const {id}  = await params;

    const results = await pool.query(
        `SELECT *
        FROM members
        WHERE id = $1
        `,
    [id]
    )
    
    const member = results.rows[0];

    if(!member) notFound();

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
                <p>Membership Status:</p>
                <p>Certification Status:</p>
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