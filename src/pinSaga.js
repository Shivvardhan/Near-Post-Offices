import { call, put, takeEvery } from 'redux-saga/effects';
import fetchAPI from './fetch';
import { getPinSuccess } from './pinSlice';

function* workgetPinFetch(action) {
    const pin = yield call(fetchAPI ,`https://api.postalpincode.in/pincode/${action.payload}`);
    yield put(getPinSuccess(pin));
}

function* pinSaga() {
    yield takeEvery('pincode/getPinFetch', workgetPinFetch);
}

export default pinSaga; 