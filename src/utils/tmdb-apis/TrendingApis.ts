import { asyncRequest
  , tmdbApiOptions
  , tmdbApiParams
  , tmdbApiUrls
} from "./BaseApis";

type MediaType = 'all' | 'movie' | 'tv' | 'person';
type TimeWindow = 'day' | 'week';

export type ITrending = {
  page: number,
  results: Array<{
    adult?: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title?: string,
    overview: string,
    poster_path: string,
    release_date?: string,
    title?: string,
    video?: boolean,
    vote_average: number,
    vote_count: number,
    popularity: number,
    first_air_date?: string,
    name?: string,
    origin_country?: Array<string>,
    original_name?: string,
  }>,
  total_pages: number,
  total_results: number,
}

const getTrendingAsync :((mediaType: MediaType, timeWindow: TimeWindow) => Promise<ITrending>)
    = async(mediaType: MediaType, timeWindow: TimeWindow) => {
  const url = `${tmdbApiUrls.getTrending}/${mediaType}/${timeWindow}?${new URLSearchParams(tmdbApiParams)}`;
  return asyncRequest(
    url,
    tmdbApiOptions,
    `Could not get trending for ${mediaType} by ${timeWindow}`);
}
