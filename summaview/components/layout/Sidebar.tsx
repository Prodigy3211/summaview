import Link from "next/link";


export default function Sidebar (){
    return(
        <div className="">
            <div className="flex items-start gap-2">
            <div className="border-2 border-solid">
                <Link href={"/crm/member-search"}>Individuals</Link>
            </div>
            <div className="border-2 border-solid">
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
        </div>
    )
}