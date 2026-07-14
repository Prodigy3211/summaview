import Link from "next/link";


export default function Sidebar (){
    return(
        <div className="rounded-xl shrink-0 border border-gray-300 flex flex-col w-80 gap-2 p-5 bg-white text-center shadow-sm">
            
            
            <div className="border rounded-xl transition hover:bg-gray-400">
                <Link href={"/crm/member-search/new"}>Add New Member</Link>
            </div>
            <div className="border rounded-xl transition hover:bg-gray-400">
                <Link href={"/"}>Dashboard</Link>
            </div>
            <div className="border rounded-xl transition hover:bg-gray-400">
                <Link href={"/crm/member-search"}>Individuals</Link>
            </div>
            <div className="border rounded-xl transition hover:bg-gray-400">
                <Link href={"/crm/member-search"}>Organizations</Link>
            </div>
            {/* <div>
                <Link href={"/Certificationmaintenance"}>Certification Maintenance</Link>
            </div> */}
            
        </div>
    )
}