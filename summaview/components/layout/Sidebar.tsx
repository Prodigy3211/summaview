import Link from "next/link";


export default function Sidebar (){
    return(
        <div className="flex flex-col">
            <div>
                <Link href={"/crm/member-search"}>Individuals</Link>
            </div>
            <div>
                <Link href={"/crm/member-search"}>Organizations</Link>
            </div>
            {/* <div>
                <Link href={"/Certificationmaintenance"}>Certification Maintenance</Link>
            </div> */}
        </div>
    )
}