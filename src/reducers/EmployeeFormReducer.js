import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_RESET
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane'}
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_RESET:
    case EMPLOYEE_CREATE:
      //action.payload === { prop: 'name', value: 'jane'}
      return INITIAL_STATE;
    default:
      return state;
  }
};
