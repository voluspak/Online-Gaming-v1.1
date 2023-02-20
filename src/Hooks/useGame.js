import responsiveGames from '../Mocks/data.json'

const useGame = () => {
  const gameList = responsiveGames.results
  const mappedList = gameList.map(game => ({ ...game, img: game.background_image }))
  return { mappedList }
}

export default useGame
