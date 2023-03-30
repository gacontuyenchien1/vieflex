// Purpose: when delete or add one variable,
// it's NOT affect to another line
import {
  asyncRequest
  , tmdbApiOptions
  , tmdbApiParams
  , tmdbApiUrls
} from './BaseApis';

export type IMovieImage = {
  id: number
  backdrops: Array<{
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: any
    vote_average: number
    vote_count: number
    width: number
  }>
  posters: Array<{
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: string
    vote_average: number
    vote_count: number
    width: number
  }>
}

const getMovieImageAsync: ((movie_id: number, language?: string, include_image_language?: string) => Promise<IMovieImage>)
    = async(movie_id: number, language: string='en-US', include_image_language: string='') => {
  const curParams = {...tmdbApiParams,
    language,
    include_image_language,
  };
  const url:string = `${tmdbApiUrls.getMovieImages}/${movie_id}/images?${new URLSearchParams(curParams)}`;
  return asyncRequest(
    url,
    tmdbApiOptions,
    `Could not get movie images for movie_id=${movie_id}, \
    language=${curParams.language}, \
    include_image_language=${curParams.include_image_language}`);
}

interface IGetMovieNowPlayingParams{
  api_key?: number;
  language?: string;
  page?: number;
  region?: string;
}

export type IMovieNowPlaying = {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: Array<{
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }>
  total_pages: number
  total_results: number
}

const getMovieNowPlayingAsync: ((param: IGetMovieNowPlayingParams) => Promise<IMovieNowPlaying>)
    = async(param: IGetMovieNowPlayingParams) => {
  const curParams:any = {
    ...tmdbApiParams,
    language: param.language || 'en-US',
    page: param.page || 1,
    region: param.region || '',
  }
  return asyncRequest(
    tmdbApiUrls.getMovieNowPlaying + '?' + new URLSearchParams(curParams),
    tmdbApiOptions,
    `Could not get movie now playing for language=${curParams.language}, \
    page=${curParams.page}, \
    region=${curParams.region}`);
}
