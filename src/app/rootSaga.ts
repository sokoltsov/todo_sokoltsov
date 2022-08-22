import { all } from 'redux-saga/effects';
import todoSaga from './sagas/todoSaga';

export default function* rootSaga() {
  yield all([todoSaga()]);
}