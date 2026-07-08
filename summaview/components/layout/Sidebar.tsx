import Link from "next/link";


export default function Sidebar (){
    return(
        <div className="flex gap-2 flex-col">
            <div className="border-2 border-solid">
                <Link href={"/crm/member-search"}>Individuals</Link>
            </div>
            <div className="h-24 w-30 border-2 border-solid">
                <Link href={"/crm/member-search"}>Organizations</Link>
            </div>
            <div className="border-2 border-solid">
                <Link href={"/crm/member-search/new"}>Add New Member</Link>
            </div>
            <div className="border-2 border-solid">
                <Link href={"/"}>Dashboard</Link>
            </div>
            {/* <div>
                <Link href={"/Certificationmaintenance"}>Certification Maintenance</Link>
            </div> */}
        </div>
    )
}