import { GetMusicFromWeatherController } from './getMusicBasedOnWeatherController'
import { GetMusicBasedOnWeatherUseCase } from './getMusicBasedOnWeatherUseCase'

const getMusicFromWeatherUseCase = new GetMusicBasedOnWeatherUseCase()
const getMusicFromWeatherController = new GetMusicFromWeatherController(getMusicFromWeatherUseCase)

export { getMusicFromWeatherController }
