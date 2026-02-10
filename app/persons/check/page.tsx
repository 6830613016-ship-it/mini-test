import { getSession } from "@/app/utills/loginUser";
import { auth } from "@clerk/nextjs/server"; // นำเข้า auth จาก Clerk

export default async function CheckToken() {
   let session;
   const { userId } = await auth();

   try {
       session = await getSession();

       if (!session && userId) {
           session = {
               user: {
                   id: userId,
                   username: "Clerk User",
               },
               isLoggedIn: true,
               method: "Clerk"
           };
       }
       console.log("Active Session:", session);
   }
   catch (e) {
       console.log("Error logic:", e);
       session = null;
   }

   return (
       <div>{JSON.stringify(session)}</div>
   )
}