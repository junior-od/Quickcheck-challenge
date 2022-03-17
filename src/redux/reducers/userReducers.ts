import {ReduxConstants} from '../../utils/constants';
import {UserReducerState} from '../../utils/types';

const initialState: UserReducerState = {
  userSession: false,
};

const userReducers = (state: UserReducerState = initialState, action: any) => {
  switch (action.type) {
    case ReduxConstants.USER_SESSION:
      return {...state, userSession: action.payload};

    default:
      return state;
  }
};

export default userReducers;
