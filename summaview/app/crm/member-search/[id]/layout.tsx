import React from "react";

export default function MembershipLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
   return(
    <div>
     <div>{children}</div>
    </div>
   ); 
}