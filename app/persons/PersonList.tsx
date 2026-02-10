'use client'
import { PersonType, STYLE } from "../constants/type"



export default function ListPerson({ persons }: { persons: PersonType[] }) {
   return (
       <div className={STYLE}>
           <ListPersonitem persons={persons} />
       </div >
   )
}


function ListPersonitem({ persons }: { persons: PersonType[] }) {
   return <ul>
       {persons.map(p => (
           <li className={STYLE}
               key={p.id}>
               <div>ID:  {p.id}</div> 
               <div>Task:  {p.task}</div>
               <div>⏱️ {p.time} </div>
               <div>Status →{p.isDone ? "  true" : "  false"}</div>
           </li>))
       }
   </ul>
}