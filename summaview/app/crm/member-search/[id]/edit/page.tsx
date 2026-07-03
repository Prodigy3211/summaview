// This page allows users to edit the member's profile
// I used a separate page for easy debugging and cleaner code. May Add in inline profile editing later

import {getMembersById, updateMember } from "@/lib/members";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";


const memberStatus = ["Active", "Inactive", "Prospect"] as const;

export default async function EditMemberPage({
    params,
}: {
    params: Promise <{ id: string}>;
}) {
    const { id } = await params;

    const member = await getMembersById(id);

    if (!member) {
        notFound();
    }


async function updateMemberAction(formData: FormData) {
    "use server";

    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const status = formData.get("status")?.toString().trim();

    if(!firstName || !lastName || !email || !status) {
        throw new Error ("First and Last name, email and status are required.");
    }

    await updateMember(id, {
        firstName,
        lastName,
        email,
        phone: phone ?? "",
        status,
    });

    redirect(`/crm/member-search/${id}`);
}



return (
    <main>
        <div>
            <Link href={`/crm/member-search/${id}`}>To Profile Page</Link>
        </div>

        <h1>Edit Member</h1>

        <form action={updateMemberAction}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    defaultValue={member.first_name}
                    required
                />
            </div> 
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    defaultValue={member.last_name}
                    required
                />
            </div>
             <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    defaultValue={member.email}
                    required
                />
            </div>
             <div>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    defaultValue={member.phone ?? ""}
                />
            </div>
             <div>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    defaultValue={member.status}
                    required
                >
                    {memberStatus.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                    </select>
            </div>
            <button type="submit"> Save Changes</button>

        </form>
    </main>
)

};