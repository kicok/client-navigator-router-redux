import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './type';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId }); //객체에 userId를 추가.

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // Do some programmatic navigation to get the user back to the root route
  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  //const response = await streams.put(`/streams/${id}`, formValues); //streams.put(..) 방식은 모든 속성을 수정하므로 없는 속성값은 지워짐
  const response = await streams.patch(`/streams/${id}`, formValues); // 값이 있는 속성값만 변경됨.

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};
