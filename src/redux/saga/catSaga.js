import { getCatsSuccess } from '../reducers/catState';
import { call, put, takeEvery } from 'redux-saga/effects';

function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 30);
  yield put(getCatsSuccess(formattedCatsShortened));
}

function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;
