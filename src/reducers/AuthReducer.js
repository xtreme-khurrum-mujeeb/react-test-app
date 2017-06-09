import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = null, action) => {
  switch (action.type) {
    case 'email_changed':

    default:
    return state;
  }
};
