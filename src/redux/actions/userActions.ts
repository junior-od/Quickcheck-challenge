import {ReduxConstants} from '../../utils/constants';
import {customAction} from '../../utils/helpers';

export const setUserSession =
  (userSessionStatus: Boolean) => (dispatch: any) => {
    dispatch(customAction(ReduxConstants.USER_SESSION, userSessionStatus));
  };
