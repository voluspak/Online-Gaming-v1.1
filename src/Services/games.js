const API_KEY = '65e84654abea4112844d6df18731db12'

export async function searchingGamesList ({ search }) {
  if (search === '') return

  try {
    const resp = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${search}`)
    const json = await resp.json()
    const gameList = json.results

    return gameList?.map(game => ({ ...game, img: game.background_image }))
  } catch (error) {
    throw new Error(error + 'No se encontraron resultados')
  }
}

export async function mainGamesList () {
  try {
    const resp = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const json = await resp.json()
    const mainList = json.results

    return mainList?.map(game => ({ ...game, img: game.background_image }))
  } catch (error) {
    throw new Error(error + 'No se encontraron resultados')
  }
}
