import { useState, useCallback, useEffect } from 'react'
import Games from './components/Games/Games'
import useGame from './Hooks/useGame'
import useSearch from './Hooks/useSearch'
import debounce from 'just-debounce-it'

const App = () => {
  const [search, setSearch] = useState('')
  const [orden, setOrden] = useState()
  const { games, getGames, loading, mainGames, defaultGames } = useGame({ search, orden })
  const { searchingError } = useSearch({ search, getGames })

  const debouncedGetGames = useCallback(
    debounce((search) => {
      getGames({ search })
    }, 500), [])

  function handleSubmit (event) {
    event.preventDefault()
    getGames({ search })
  }

  function handleChange (event) {
    const newSearch = event.target.value
    setSearch(newSearch)
    if (!searchingError) {
      debouncedGetGames(newSearch)
    }
  }

  function handleOrden () {
    setOrden(!orden)
  }

  useEffect(() => {
    mainGames()
  }, [])
  return (
    <div className=' mx-auto w-full grid place-content-center'>
      <header className='flex flex-col items-center gap-5 justify-center w-full h-52'>
        <h1 className='font-bold text-3xl'>Online Gaming App</h1>
        <form onSubmit={handleSubmit} className='flex gap-5'>
          <input name='buscador' value={search} onChange={handleChange} className='w-3/4 p-2 border border-gray-500 rounded-md ' placeholder='Grand Thef Auto, Counter...' />
          <input type='checkbox' onChange={handleOrden} checked={orden} />
          <button type='submit' disabled={searchingError} className='px-3 shadow-lg active:shadow-md border rounded-md'>Buscar</button>
        </form>
        {
          searchingError &&
            (<span className='text-red-900 text-lg'>{searchingError}</span>)
        }
      </header>
      <main>
        {
          loading
            ? (<span>Cargando...</span>)
            : <Games gameList={games} list={defaultGames} />
        }
      </main>
    </div>
  )
}

export default App
