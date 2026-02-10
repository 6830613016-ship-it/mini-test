'use server'

import { PERSONS_URL } from "@/app/constants/type"
import { revalidatePath } from "next/cache"


export async function createPerson(formData: FormData) {
    const person = {
        task: formData.get('task'),
        time: Number(formData.get('time')),
    }


    await fetch(PERSONS_URL, {
        method: 'POST',
        body: JSON.stringify(person),
        headers: { 'Content-Type': 'application/json' },
    })
    revalidatePath('/persons/editPerson')
}


export async function updatePerson(formData: FormData) {
    const id = formData.get('id')
    const person = {
        task: formData.get('task'),
        time: Number(formData.get('time')),
        isDone: Boolean(formData.get('isDone'))
    }


    await fetch(`${PERSONS_URL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(person),
        headers: { 'Content-Type': 'application/json' },
    })
    revalidatePath('/persons/editPerson')
}




const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export async function deletePerson(id: string) {
    await fetch(`${PERSONS_URL}/${id}`, {
        method: 'DELETE',
    })
    await wait(1000)
    revalidatePath('/persons/editPerson')
}