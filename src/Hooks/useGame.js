import { useState, useRef, useCallback, useMemo } from 'react'
import { searchingGamesList, mainGamesList } from '../Services/games'

const useGame = ({ search, orden }) => {
  const [searchedGames, setSearchedGames] = useState()
  const [defaultGames, setDefaultGames] = useState()
  const [loading, setLoading] = useState(false)
  const prevSearch = useRef(search)

  const getGames = useCallback(
    async ({ search }) => {
      if (prevSearch.current === search) return
      try {
        setLoading(true)
        const newList = await searchingGamesList({ search })
        setSearchedGames(newList)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, [])

  const mainGames = useCallback(
    async () => {
      try {
        setLoading(true)
        const mainList = await mainGamesList()
        setDefaultGames(mainList)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  )
  const juegosOrdenados = useMemo(() => {
    return orden
      ? [...searchedGames].sort((a, b) => a.name.localeCompare(b.name))
      : searchedGames
  }, [orden, searchedGames])

  return { games: juegosOrdenados, getGames, loading, mainGames, defaultGames }
}

export default useGame
