import {ADD_CONTACT, DISPLAY_CONTACT} from './constants';

const INITIAL_STATE = {
  selectedContact: '',
  displayContacts: false,
};
export default function (state = INITIAL_STATE, action) {
  if (action.type === ADD_CONTACT) {
    return {
      ...state,
      selectedContact: action.payload,
    };
  } else if (action.type === DISPLAY_CONTACT) {
    return {
      ...state,
      displayContacts: action.payload,
    };
  }

  return state;
}
