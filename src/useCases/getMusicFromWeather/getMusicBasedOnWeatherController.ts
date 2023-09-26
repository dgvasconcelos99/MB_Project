import { Request, Response } from 'express'
import { GetMusicBasedOnWeatherUseCase } from './getMusicBasedOnWeatherUseCase'

export class GetMusicFromWeatherController {
  constructor(private getMusicUseCase: GetMusicBasedOnWeatherUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { location } = request.query

    try {
      const getMusic = await this.getMusicUseCase.execute({
        location,
      })

      return response.status(200).send(getMusic)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unknown error',
      })
    }
  }
}
