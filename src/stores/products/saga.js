import { takeLatest, put, call, all } from 'redux-saga/effects';
import { api } from 'config/api';
import { request } from 'config/request';
import {
  getAllPRODUCTsFailed,
  getAllPRODUCTsSuccess,
  getSinglePRODUCTFailed,
  getSinglePRODUCTSuccess
} from './actions';
import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from './types';

function* fetchPrducts() {
  try {
    const res = yield call(request, 'get', api.products.getAll);

    if (res.status_name === 'success') yield put(getAllPRODUCTsSuccess(res.data));
    else {
      yield put(getAllPRODUCTsFailed(res));
    }
  } catch {
    yield put(getAllPRODUCTsFailed('error'));
  }
}

function* fetchSingleProduct(action) {
  try {
    const res = yield call(request, 'get', api.products.getOne(action.payload.id));

    if (res.status_name === 'success')
      yield put(getSinglePRODUCTSuccess(res.data));
    else {
      yield put(getSinglePRODUCTFailed(res));
    }
  } catch {
    yield put(getSinglePRODUCTFailed('error'));
  }
}

function* fetchPrductsWatcher() {
  yield takeLatest(GET_ALL_PRODUCTS, fetchPrducts);
}
function* fetchSingleProductWatcher() {
  yield takeLatest(GET_SINGLE_PRODUCT, fetchSingleProduct);
}

export function* root() {
  yield all([fetchPrductsWatcher(), fetchSingleProductWatcher()]);
}

export default root;
