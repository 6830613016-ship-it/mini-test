import { PERSONS_URL, STYLE } from "../constants/type"
import PersonList from "./PersonList"

export default async function Page() {
   const res = await fetch(PERSONS_URL, {
       cache: 'no-store',
   })
   const persons = await res.json()
   return (
       <div className="mx-15">
           <h2 className={STYLE}>persons</h2>
           <PersonList persons={persons} />
       </div>
   )
    }
