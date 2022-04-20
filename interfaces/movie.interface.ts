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
  media_type?: MediaType
  first_air_date?: string
  original_name?: string
  origin_country?: string[]
  name?: string
}

export interface MovieDto {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres?: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  videos?: Videos
  created_by: CreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  in_production: boolean
  languages: OriginalLanguage[]
  last_air_date: string
  last_episode_to_air: TEpisodeToAir
  name: string
  next_episode_to_air: TEpisodeToAir
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: OriginCountry[]
  original_name: string
  seasons: Season[]
  type: string
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

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export interface CreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface TEpisodeToAir {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: null | string
  vote_average: number
  vote_count: number
}

export interface Network {
  name: string
  id: number
  logo_path: string
  origin_country: OriginCountry
}

export enum OriginCountry {
  Us = 'US',
}

export interface ProductionCountry {
  iso_3166_1: OriginCountry
  name: string
}

export interface Season {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: OriginalLanguage
  name: string
}

export interface Videos {
  results: Video[]
}

export interface Video {
  iso_639_1: OriginalLanguage
  iso_3166_1: OriginCountry
  name: string
  key: string
  site: Site
  size: number
  type:
    | 'Blooper'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
  official: boolean
  published_at: string
  id: string
}

export enum Site {
  YouTube = 'YouTube',
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface ProductionCompany {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}
