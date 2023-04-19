import { ADD_CONTACT } from './constants';
import { DISPLAY_CONTACT } from './constants';

export function addSelectedContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
}

export function showContacts(display) {
  return {
    type: DISPLAY_CONTACT,
    payload: display,
  };
}
