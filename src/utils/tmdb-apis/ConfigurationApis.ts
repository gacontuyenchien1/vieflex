import { asyncRequest
  , tmdbApiOptions
  , tmdbApiParams
  , tmdbApiUrls
} from "./BaseApis";

export type IApiConfiguration = {
  images: {
    base_url: string,
    secure_base_url: string,
    backdrop_sizes: Array<string>,
    logo_sizes: Array<string>,
    poster_sizes: Array<string>,
    profile_sizes: Array<string>,
    still_sizes: Array<string>,
  },
  change_keys: Array<string>,
}

const getApiConfigurationAsync : () => Promise<IApiConfiguration>
    =  async () => {
  return asyncRequest(
    tmdbApiUrls.getApiConfigurationURL + '?' + new URLSearchParams(tmdbApiParams),
    tmdbApiOptions,
    "Could not get configuration");
};
