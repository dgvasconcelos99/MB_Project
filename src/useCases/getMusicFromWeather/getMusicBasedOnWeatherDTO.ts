export interface IGetMusicBasedOnWeatherRequestDTO {
  location: string
}

export interface ISpotifyGetMusicItems {
  album: {
    album_type: string
    artists: Object[]
    available_markets: string[]
    external_urls: Object
    href: string
    id: string
    images: Object[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
  artists: [
    {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    },
    {
      external_urls: {
        spotify?: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    }
  ]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids?: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: false
  name: string
  popularity: number
  preview_url?: string
  track_number: number
  type: string
  uri: string
}

export interface ISpotifyResponseDTO {
  tracks: {
    href: string
    items: ISpotifyGetMusicItems[]
    limit: number
    next: string
    offset: number
    previous: string
    total: number
  }
}

export interface IGetMusicBasedOnWeatherResponseDTO {
  musicName: string
  albumName: string
  previewUrl: string
  uri: string
}
