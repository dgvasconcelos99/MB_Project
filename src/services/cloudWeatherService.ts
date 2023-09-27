require('dotenv').config()

const apiKey = process.env.OPENWEATHER_KEY
async function fetchCoordinatesOpenWeatherWebApi(locationName: string) {
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${apiKey}`, {
    method: 'GET',
  })
  return await res.json()
}

async function fetchWeatherByLocation(locationName: string): Promise<IFetchCoordinatesOpenWeatherApiResponse> {
  const searchCoordinates = await fetchCoordinatesOpenWeatherWebApi(locationName)
  if (!searchCoordinates) throw new Error('Could not find location by given name')
  const { lat, lon } = searchCoordinates[0]
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
    {
      method: 'GET',
    }
  )
  return await res.json()
}

export { fetchWeatherByLocation }

export interface IFetchCoordinatesOpenWeatherApiResponse {
  coord?: {
    lon: number
    lat: number
  }
  weather?: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  base?: string
  main?: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility?: number
  wind?: {
    speed: number
    deg: number
    gust: number
  }
  rain?: Object
  clouds?: {
    all: number
  }
  dt?: number
  sys?: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone?: number
  id?: number
  name?: string
  cod?: number
}
