import {ReduxActionState} from './types';

export const customAction = (
  type: string,
  payload: any | null,
): ReduxActionState => {
  return {
    type,
    payload,
  };
};
