// Purpose: when delete or add one varialbe,
// it's NOT affect to another line
import {
  asyncRequest
  , tmdbApiOptions
  , tmdbApiParams
  , tmdbApiUrls
} from './BaseApis';

const getTvPopularAsync: ((language?: string, page?: number) => Promise<string>)
    = async(language: string='en-US', page: number=1) => {
  const curParams:any = {
    ...tmdbApiParams,
    language: language,
    page: page,
  }
  return asyncRequest(
    tmdbApiUrls.getTvPopular + '?' + new URLSearchParams(curParams),
    tmdbApiOptions,
    `Message when we get fail`);
}
