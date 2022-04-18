export interface GetMovies {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  adult: boolean
  backdrop_path: null | string
  genre_ids: number[]
  id: number
  original_language: OriginalLanguage
  original_title: string
  overview: string
  popularity: number
  poster_path: null | string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export enum OriginalLanguage {
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Hi = 'hi',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  No = 'no',
  Ru = 'ru',
  Sv = 'sv',
}

export interface GetTrendingMovies {
  page: number
  results: TrendingMovie[]
  total_pages: number
  total_results: number
}

export interface TrendingMovie {
  overview: string
  id: number
  vote_count: number
  adult?: boolean
  backdrop_path: string
  genre_ids: number[]
  original_language: OriginalLanguage
  original_title?: string
  poster_path: string
  vote_average: number
  release_date?: string
  title?: string
  video?: boolean
  popularity: number
  media_type: MediaType
  first_air_date?: string
  original_name?: string
  origin_country?: string[]
  name?: string
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}
