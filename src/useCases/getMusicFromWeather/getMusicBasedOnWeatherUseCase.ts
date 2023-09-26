import { fetchWeatherByLocation } from '../../services/cloudWeatherService'
import { getRandomSearch, getTopTracks } from '../../services/spotifyService'
import { IGetMusicBasedOnWeatherRequestDTO, IGetMusicBasedOnWeatherResponseDTO } from './getMusicBasedOnWeatherDTO'

export class GetMusicBasedOnWeatherUseCase {
  async execute(data: IGetMusicBasedOnWeatherRequestDTO): Promise<IGetMusicBasedOnWeatherResponseDTO> {
    const searchCoordinates = await fetchWeatherByLocation(data.location)
    const { temp } = searchCoordinates?.main

    Math.round(temp)
    console.log({ temp })
    if (!temp) throw new Error('Error on search temperature based on location')

    let selectedGenre: string
    switch (true) {
      case temp < 0:
        selectedGenre = 'electronic'
        break
      case temp >= 0 && temp < 10:
        selectedGenre = 'pop'
        break
      case temp >= 10 && temp < 30:
        selectedGenre = 'jazz'
        break
      case temp >= 30:
        selectedGenre = 'mpb'
        break
      default:
        break
    }

    const requestedMusic = (await getRandomSearch(selectedGenre))?.tracks.items[0]

    if (!requestedMusic) throw new Error('Error on get spotify data')

    const formattedData = {
      musicName: requestedMusic.name,
      albumName: requestedMusic.album.name,
      previewUrl: requestedMusic.preview_url,
      uri: requestedMusic.uri,
    }
    return formattedData
  }
}
