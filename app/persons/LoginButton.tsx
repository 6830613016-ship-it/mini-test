
import Link from "next/link";
import { getSession } from "../utills/loginUser";
import { STYLE } from "../constants/type";


export default async function LogIn() {
   let session;
   try {
       session = await getSession()
       console.log("Session: ", session)
   }
   catch (e) {
       console.log("Error: ", e)
       session = null
   }
   return ( !session && <Link className={STYLE} href="/persons/login">Login</Link> )
}

