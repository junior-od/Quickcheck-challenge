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

export const mockData = [1,2,3,4,5,6,7,8,9,10];
