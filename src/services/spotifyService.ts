require('dotenv').config()

import { ISpotifyResponseDTO } from '../useCases/getMusicFromWeather/getMusicBasedOnWeatherDTO'

async function fetchSpotifyWebApi(endpoint: string, method: string, body?: object): Promise<ISpotifyResponseDTO> {
  const token: string = process.env.SPOTIFY_TOKEN
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  })
  return await res.json()
}

async function getRandomSearch(genre: string): Promise<ISpotifyResponseDTO> {
  const result = await fetchSpotifyWebApi(`v1/search?q=genres%3A${genre}&limit=1&type=track`, 'GET')
  return result
}

export { getRandomSearch }
