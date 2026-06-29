// This file will hold a new member form where you can create a new member. It will use the members.ts file in the lib folder to pull data

import { createMember } from "@/lib/members";
import Form from "next/form";
import Link from "next/link";
import { redirect } from "next/navigation"


const memberStatus = ["Active", "Inactive", "Prospect"] as const;

export default function NewMemberPage () {
    async function createMemberAction(formData: FormData) {
        "use server";
        
        const firstName = formData.get("firstName")?.toString().trim();
        const lastName = formData.get("lastName")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();
        const status = formData.get("status")?.toString().trim();

        if(!firstName || !lastName || !email || !phone || !status){
            throw new Error ("First Name, Last Name, Email, Phone Number, and Status are Required");
        }

        const member = await createMember({
            firstName,
            lastName,
            email,
            phone: phone ?? "",
            status
        });

        redirect(`/crm/member-search/${member.id}`)
    }

    return (
        <main>
            <div>
                <Link href="/crm/member-search">Back to Members</Link>
            </div>

            <h1>Create A New Member</h1>

            <form action={createMemberAction}>
                <div>
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="status">
                        Status
                    </label>
                    <select
                    id="status"
                    name="status"
                    defaultValue="Active"
                    required
                    >
                    {memberStatus.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                    </select>
                </div>
                <button type="submit">Create Member</button>
            </form>
        </main>
    );
}