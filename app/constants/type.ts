export const PERSONS_URL = `http://localhost:4000/persons`
export const USER_URL = `http://localhost:4000/users`
export const STYLE =`p-2 m-2 border-2 rounded shadow-xl border-gray-200 max-w-[75vw]`

export type PersonType = {
    newId: number
    id: string
    task: string
    time: number
    isDone: boolean
}

export type PersonPropsType = PersonType & {
    deleteUser: (id: string) => void
    editUser: (id: string) => void
}

export type UserType = {
   id: string
   name: string
   email: string
   password: string
}

