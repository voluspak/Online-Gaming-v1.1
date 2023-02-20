import { useState, useRef, useMemo } from 'react'
import { searchingGamesList } from '../Services/games'

const useGame = ({ search, orden }) => {
  const [games, setGames] = useState()
  const [loading, setLoading] = useState(false)
  const prevSearch = useRef()

  async function getGames () {
    if (prevSearch.current === search) return
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

  const juegosOrdenados = useMemo(() => {
    return orden
      ? [...games].sort((a, b) => a.name.localeCompare(b.name))
      : games
  }, [orden, games])

  return { games: juegosOrdenados, getGames, loading }
}

export default useGame
