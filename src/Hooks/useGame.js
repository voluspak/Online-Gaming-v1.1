import { useState } from 'react'
import searchingGamesList from '../Services/games'

const useGame = ({ search }) => {
  const [games, setGames] = useState()
  const [loading, setLoading] = useState(false)

  async function getGames () {
    try {
      setLoading(true)
      const newList = await searchingGamesList({ search })
      setGames(newList)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return { games, getGames, loading }
}

export default useGame
