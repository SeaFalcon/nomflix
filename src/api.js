import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "2cd2d1405f2f5acba72644f3ddd9565b",
    language: "en-US"
  }
});

// 참고, 문자열 경로앞에 /를 넣으면 절대 경로로 가져옴
// api.get("tv/popular");

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
