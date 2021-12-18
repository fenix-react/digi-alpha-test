import { takeLatest, put, call, all } from 'redux-saga/effects';
import { api } from 'config/api';
import { request } from 'config/request';
import {
  getAllUsersFailed,
  getAllUsersSuccess,
  getSingleUserFailed,
  getSingleUserSuccess
} from './actions';
import { GET_ALL_USERS, GET_SINGLE_USER } from './types';

function* fetchUsers() {
  try {
    const res = yield call(request, 'get', api.users.getAll);

    if (res.status_name === 'success') yield put(getAllUsersSuccess(res.data));
    else {
      yield put(getAllUsersFailed(res));
    }
  } catch {
    yield put(getAllUsersFailed('error'));
  }
}

function* fetchSingleUser(action) {
  try {
    const res = yield call(request, 'get', api.users.getOne(action.payload.id));

    if (res.status_name === 'success')
      yield put(getSingleUserSuccess(res.data));
    else {
      yield put(getSingleUserFailed(res));
    }
  } catch {
    yield put(getSingleUserFailed('error'));
  }
}

function* fetchUsersWatcher() {
  yield takeLatest(GET_ALL_USERS, fetchUsers);
}
function* fetchSingleUserWatcher() {
  yield takeLatest(GET_SINGLE_USER, fetchSingleUser);
}

export function* root() {
  yield all([fetchUsersWatcher(), fetchSingleUserWatcher()]);
}

export default root;
