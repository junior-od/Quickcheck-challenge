export enum ReduxConstants {
  USER_SESSION = 'USER_SESSION',
}
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
export enum Hn {
  BASE_URL = 'https://hacker-news.firebaseio.com/v0/',
  TOP_STORIES = 'topstories.json',
  A_STORY = 'item/',
}

export const requestTimeout: number = 45000;
