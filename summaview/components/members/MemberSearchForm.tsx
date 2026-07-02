import Form from 'next/form';
// this form will search for members in the database. The local configuration is in the lib folder

// import Link from "next/link";
// import { pool } from "@/lib/db";

type SearchFormProps = {
    query: string;
};

export default async function MemberSearchForm ({
    query,
    }: SearchFormProps) {
 
 

// function findIndividual (){
    return(
        <div>
        <div>Individual Search</div>
        <Form action="/crm/member-search">
           <div>
            <div>
            Search: 
            <input
                type="search"
                name ="q"
                placeholder="Search Individuals"
                className='border solid 2px'
                />
            </div>
            <div>Submit
            <button 
            type="submit"
            className='bg-blue'
            />
            </div>
            </div>
        </Form>

        {/* {members.map((member) => (
            <Link key={member.id} href={`/crm/member-search/${member.id}`}>
                <div>
                    {member.first_name} {member.last_name} - {member.email}
                </div>
            </Link>
        ))} */}

        </div>
    )

// }


    

}