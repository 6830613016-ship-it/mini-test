
import PersonForm from '@/app/_actions/PersonForm'
import { PERSONS_URL, STYLE } from '@/app/constants/type'


export default async function Page() {
  const res = await fetch(PERSONS_URL, {
      cache: 'no-store',
  })
  const persons = await res.json()
  return (
      <div className="mx-15">
          <h2 className={STYLE}>Persons</h2>
          <PersonForm persons={persons} />
      </div>
  )
}

