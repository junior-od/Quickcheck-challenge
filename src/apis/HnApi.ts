import {Hn} from '../utils/constants';
import {instance} from '../utils/NetworkConfig';

export const getTopStoryIds = async () => {
  try {
    const response = await instance.get(Hn.TOP_STORIES);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject('something went wrong');
  }
};

export const getStory = async (storyId: number) => {
  try {
    const response = await instance.get(`${Hn.A_STORY}${storyId}.json`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject('something went wrong');
  }
};
