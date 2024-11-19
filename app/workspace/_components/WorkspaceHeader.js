"use client"
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useMutation } from "convex/react";
import { api } from '@/convex/_generated/api';



function WorkspaceHeader({fileName}) {
 return (
   <div className="p-4 flex justify-between shadow-md">
       <Image src={"/logo.svg"} alt="logo" width={140} height={100}/>
       <h2 className="font-bold">{fileName}</h2>
       <div className="flex gap-3 items-center">
         <h2>Your notes are saved...</h2>
         <UserButton/>
       </div>
   </div>
 )
}


export default WorkspaceHeader
