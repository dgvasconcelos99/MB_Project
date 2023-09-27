import { Router } from 'express'
import { getMusicFromWeatherController } from './useCases/getMusicFromWeather'

const router = Router()

router.get('/getMusicFromWeather', (request, response) => {
  try {
    return getMusicFromWeatherController.handle(request, response)
  } catch (error) {
    response.status(500).send({ error })
  }
})

export { router }
