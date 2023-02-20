import { useState } from 'react'
import Games from './components/Games/Games'
import useGame from './Hooks/useGame'
import useSearch from './Hooks/useSearch'
// const API_KEY = '65e84654abea4112844d6df18731db12'

const App = () => {
  const [search, setSearch] = useState('')
  const { searchingError } = useSearch({ search })
  const { games, getGames } = useGame({ search })

  function handleSubmit (event) {
    event.preventDefault()
    getGames()
  }

  function handleChange (event) {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <div className=' mx-auto w-full grid place-content-center'>
      <header className='flex flex-col items-center gap-5 justify-center w-full h-52'>
        <h1 className='font-bold text-3xl'>Online Gaming App</h1>
        <form onSubmit={handleSubmit} className='flex gap-5'>
          <input value={search} onChange={handleChange} className='w-3/4 p-2 border border-gray-500 rounded-md ' placeholder='Grand Thef Auto, Counter...' />
          <button type='submit' className='px-3 shadow-lg active:shadow-md border rounded-md'>Buscar</button>
        </form>
        {
          searchingError &&
            (<span className='text-red-900 text-lg'>{searchingError}</span>)
        }
      </header>
      <main>
        <Games gameList={games} />
      </main>
    </div>
  )
}

export default App
