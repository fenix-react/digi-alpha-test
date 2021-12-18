import { all } from 'redux-saga/effects';
import users from './users/saga';
import products from './products/saga';

export default function* AppSaga() {
  yield all([users(), products()]);
}
