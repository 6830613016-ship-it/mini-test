'use client'

import { createPerson, deletePerson, updatePerson } from '@/app/_actions/PersonActions'
import { PersonType, STYLE } from '@/app/constants/type'
import { ChangeEvent, useState, useTransition } from 'react'


export default function PersonForm({ persons }: { persons: PersonType[] }) {


    const [isPending, startTransition] = useTransition()
    const [deletingId, setDeletingId] = useState<string | null>(null)
    const [form, setForm] = useState({ task: 'Sport', time: 30, isDone: false })
    const [editId, setEditId] = useState(-1)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target
        console.log(name, value, checked)
        setForm((prev) => (
            { ...prev, [name]: value, isDone: checked }
        ))
    }


    return (
        <div className={STYLE}>
            {/* CREATE */}
            <form action={createPerson}>
                <input className={STYLE} name="task" placeholder="task" required />
                <input className={STYLE} name="time" placeholder="time"
                    type="number" required />
                <button className={STYLE}>Add</button>
            </form>
            <hr />


            {/* LIST + UPDATE + DELETE */}
            {persons.map(p => (
                <form key={p.id} action={updatePerson}>
                    <input className={STYLE} type="hidden" name="id" value={p.id} />
                    <input className={STYLE}
                        type="text" name="task" defaultValue={p.task} />
                    <input className={STYLE}
                        type="number" name="time" defaultValue={p.time} />
                    <input className={STYLE}
                        type="checkbox" name="isDone" defaultChecked={p.isDone} />
                    
                    <button className={STYLE}>Update</button>
                    <button className={STYLE} type="button"
                        onClick={() => {
                            setDeletingId(p.id)
                            startTransition(() => deletePerson(p.id))
                        }}
                    >
                        {isPending && deletingId === p.id ? "Deleting..." : "Delete"}
                    </button>
                </form>
            ))
            }
        </div >
    )
}
