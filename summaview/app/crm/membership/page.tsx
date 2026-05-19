"use client";

import Sidebar from "@/components/layout/Sidebar";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import Button from "@/components/Button";

//This Page is displaying a membership profile

export default function Memberview () {
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
                <p>Name:</p>
                <p>Membership Status:</p>
                <p>Certification Status:</p>
            </div>
            <div>
                
                <Button
                label="Edit Member information"
                variant="primary"
                onClick= {()=> void 0}
                >
                </Button>
            </div>
            </div>
        </div>
        </div>
    )
} 