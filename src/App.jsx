import React from 'react'
import responsiveGames from './Mocks/data.json'
// const API_KEY = '65e84654abea4112844d6df18731db12'

const App = () => {
  const gameList = responsiveGames.results
  const hasGames = gameList?.length > 0

  return (
    <div className=' mx-auto w-full grid place-content-center'>
      <header className='flex flex-col items-center gap-5 justify-center w-full h-52'>
        <h1 className='font-bold text-3xl'>Online Gaming App</h1>
        <form className='flex gap-5'>
          <input className='w-3/4 p-2 border border-gray-500 rounded-md ' placeholder='Grand Thef Auto, Counter...' />
          <button type='submit' className='px-3 shadow-lg active:shadow-md border rounded-md'>Buscar</button>
        </form>
      </header>
      <main>
        <ul className='w-5/6 mx-auto grid grid-cols-autoFit gap-10'>
          {
            hasGames
              ? gameList.map(game => (
                <li key={game.id} className='bg-slate-300'>
                  <figure className=''>
                    <img src={game.background_image} alt={game.name} className=' object-cover' />
                  </figure>
                  <figcaption className='p-2'>
                    <h4 className='font-bold text-center'>{game.name}</h4>
                    <p>Generos:
                    </p>
                    <p>Lanzamiento: {game.released}</p>
                  </figcaption>
                </li>
              ))
              : <h2 className='font-bold text-red-900 text-xl'>¡No se encontraron juegos para esta busqueda!</h2>
          }
        </ul>
      </main>
    </div>
  )
}

export default App
