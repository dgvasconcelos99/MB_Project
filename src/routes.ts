import { Router } from 'express'
import { getMusicFromWeatherController } from './useCases/getMusicFromWeather'

const router = Router()

router.get('/getMusicFromWeather', (request, response) => {
  return getMusicFromWeatherController.handle(request, response)
})

export { router }
