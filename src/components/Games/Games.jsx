import React from 'react'

function Games ({ gameList, list }) {
  const hasGames = gameList?.length > 0
  return (
    hasGames
      ? <DisplaySearch gameList={gameList} />
      : <DisplayMain />
  )
}

function DisplaySearch ({ gameList }) {
  return (
    <ul className='w-5/6 mx-auto grid grid-cols-autoFit gap-10'>
      {
      gameList.map(game => (
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
    }
    </ul>
  )
}

function DisplayMain () {
  return (<h2 className='text-xl font-bold text-violet-700'>Encuentra la informacion de cualquier juego que necesites</h2>)
}

export default Games
