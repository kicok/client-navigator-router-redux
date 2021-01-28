import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/type';

// const colors = [
//   {id:3},
//   {id:5},
//   {id:7},
// ]

// _.mapKeys(colors, 'id');
// ===>
// {
//   "3":{"id":3},
//   "5":{"id":5},
//   "7":{"id":7}
// }

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    // https://m.blog.naver.com/PostView.nhn?blogId=magnking&logNo=221082849017&proxyReferer=https:%2F%2Fwww.google.com%2F
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // Single Stream
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // Single Stream
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // Single Stream

    case DELETE_STREAM:
      return _.omit(state, action.payload); // action.payload는 이미 값에 id가 포함되어 있음

    default:
      return state;
  }
};
