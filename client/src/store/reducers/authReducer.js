import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../../utils/isEmpty';
import updateState from '../../utils/updateState';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return updateState(state, {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      });
    default:
      return state;
  }
}
