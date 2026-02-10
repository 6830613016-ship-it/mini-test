import Link from "next/link";
import Logout from "./LogoutButton";
import Login from "./LoginButton";
import { STYLE } from "../constants/type";


export default function Layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
       <div>
           <nav className="mx-8 p-4">
               <Link className={`${STYLE} bg-blue-600 hover:bg-700-blue text-white`} 
               href="/persons/">Home</Link>
               <Link className={`${STYLE} bg-blue-600 hover:bg-700-blue text-white`} 
               href="/persons/editPerson">Edit</Link>
               <Link className={`${STYLE} bg-blue-600 hover:bg-700-blue text-white`} 
               href="/persons/check">Check</Link>
           </nav>
           {children}
       </div>
   );
}

