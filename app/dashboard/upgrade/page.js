"use client"
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Currency } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";






function UpgradePlans() {


 const userUpgradePlan=useMutation(api.user.userUpgradePlan)
 const {user}=useUser();


 const onPaymentSuccess=async()=>{
   const result=await userUpgradePlan({userEmail:user?.primaryEmailAddress?.emailAddress});
   console.log(result);
   toast("Plan upgraded successfully");
}


 return (
   <div>
     <h2 className="font-medium text-3xl">Plans</h2>
     <p>Upgrade now to unlock multiple pdf uploads and take notes with ease!</p>


     <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
         <div className="rounded-2xl border border-gray-600 p-6 shadow-sm ring-1 ring-gray-600 sm:order-last sm:px-8 lg:p-12">
           <div className="text-center">
             <h2 className="text-lg font-medium text-gray-900">
             Starter (Beta)
               <span className="sr-only">Plan</span>
             </h2>


             <p className="mt-2 sm:mt-4">
               <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                 {" "}
                 19${" "}
               </strong>


               <span className="text-sm font-medium text-gray-700">/ 30 PDF (Beta)</span>
             </p>
           </div>


           <ul className="mt-6 space-y-2">
             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> 30 PDF Upload </span>
             </li>


             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> Unlimited Notes Taking </span>
             </li>


             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> Email support </span>
             </li>


             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> Help center access </span>
             </li>
           </ul>


           {/* <a
             href="#"
             className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
           >
             Get Started
           </a> */}
           <div className="mt-5">
             <PayPalButtons
             onApprove={()=>onPaymentSuccess()}
             onCancel={()=>console.log("Payment Cancel")}
             createOrder={(data,actions)=>{
               return actions?.order?.create({
                 purchase_units:[
                   {
                     amount:{
                       value:19,
                       currency_code:'USD'
                     }
                   }
                 ]
               })
             }}
             />
           </div>
         </div>


         <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
           <div className="text-center">
             <h2 className="text-lg font-medium text-gray-900">
             Freemium
               <span className="sr-only">Plan</span>
             </h2>


             <p className="mt-2 sm:mt-4">
               <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                 {" "}
                 0${" "}
               </strong>


               <span className="text-sm font-medium text-gray-700">/month</span>
             </p>
           </div>


           <ul className="mt-6 space-y-2">
             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> 3 PDF Upload </span>
             </li>


             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> Unlimited Notes Taking </span>
             </li>


             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> Email support </span>
             </li>


             <li className="flex items-center gap-1">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-5 text-gray-700"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 12.75l6 6 9-13.5"
                 />
               </svg>


               <span className="text-gray-700"> Help center access </span>
             </li>
           </ul>


           <a
             href="#"
             className="mt-8 block rounded-full border border-gray-600 px-12 py-3 text-center text-sm font-medium text-white-600 bg-gray-600 text-white pointer-events-none"
           >
             Free Plan
           </a>
         </div>
       </div>
     </div>
   </div>
 );
}


export default UpgradePlans;
