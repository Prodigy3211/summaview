import { navigate } from "next/dist/client/components/segment-cache/navigation";

//This Page should show membership top level membership information and allow interanl employee to interact with information

export default function memberView () {
    return (
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
                <button 
                className="bg-blue-500 text-white rounded p-2"
                >
                    Edit Member Information</button>
            </div>

        </div>
    )
} 