import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
  const resp = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: resp.data });
};

export const handleToken = (token) => async (dispatch) => {
  const resp = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: resp.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);

  // redirect back to /surveys
  history.push('/surveys');
  // refresh the user data after the post
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
