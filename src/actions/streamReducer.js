import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/type';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // Single Stream
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // Single Stream
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // Single Stream

    default:
      return state;
  }
};
