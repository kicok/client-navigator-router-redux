// Sample code

import { EDIT_STREAM } from './src/actions/type';
import streams from './src/apis/streams';

// Array-based approach
const srteamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map((stream) => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });

    default:
      return state;
  }
};

//Object-based approach
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      //   const newState = { ...state };
      //   newState[action.payload.id] = action.payload;
      //   return newState;

      //위의 코드를 아래의 코드형식으로 변경 가능
      return { ...state, [action.payload.id]: action.payload };
    // 위의 코드는 결국 아래의 코드와 같은 방식이다.  { ...state, 5: action.payload };
    default:
      return state;
  }
};
