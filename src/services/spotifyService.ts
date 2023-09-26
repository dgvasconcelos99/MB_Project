require('dotenv').config()

import { ISpotifyGetMusicItems, ISpotifyResponseDTO } from '../useCases/getMusicFromWeather/getMusicBasedOnWeatherDTO'

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

async function getTopTracks(): Promise<any> {
  return await fetchSpotifyWebApi('v1/me/top/tracks?time_range=short_term&limit=5', 'GET')
}

async function getRandomSearch(genre: string): Promise<ISpotifyResponseDTO> {
  const result = await fetchSpotifyWebApi(`v1/search?q=genres%3A${genre}&limit=1&type=track`, 'GET')
  console.log({ result: result.tracks })
  return result
}

export { getTopTracks, getRandomSearch }
