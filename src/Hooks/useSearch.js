import { useEffect, useState, useRef } from 'react'

export default function useSearch ({ search }) {
  const [searchingError, setSearchingError] = useState(null)
  const firstTime = useRef(true)

  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = search === ''
      return
    }
    if (search === '') setSearchingError('No podemos buscar un juego si el buscador esta vacio 🤔')
    else if (search.length < 3) setSearchingError('La busqueda debe tener más de 3 letras...')
    else setSearchingError('')
  }, [search])

  return { searchingError }
}
