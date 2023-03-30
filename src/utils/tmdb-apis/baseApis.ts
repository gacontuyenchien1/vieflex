const tmdbApiV3key = '733d747ce3be77a4b5ff737db791940e';
const baseApiV3Url = 'https://api.themoviedb.org/3';
export const tmdbApiUrls = {
  getApiConfigurationURL: baseApiV3Url + '/configuration',
  getTrending: baseApiV3Url + '/trending',
  getMovieImages: baseApiV3Url + '/movie',
  getMovieNowPlaying: baseApiV3Url + '/movie/now_playing',
  getTvPopular: baseApiV3Url + '/tv/popular',
}
export const tmdbApiParams={
  api_key: tmdbApiV3key,
}
export const tmdbApiOptions = {
	method: 'GET',
};

export async function asyncRequest(url:string, options: any, errorMess:string):Promise<any>{
  console.log(url, options);
  const response = await fetch(url, options);
  if (response.ok) {
    return (await response.json());
  } else {
    throw new Error(errorMess);
  }
}

// // Template for using asyncRequest
// const getSomethingAsync: ((name:string) => Promise<string>)
//     = async(name: string) => {
//   return asyncRequest(
//     tmdbApiUrls.getMovieNowPlaying,
//     tmdbApiOptions,
//     `Message when we get fail`);
// }
// // for unique test only
// async function runner(){
//   console.log(await getMovieNowPlayingAsync({}));
// }
// runner();
