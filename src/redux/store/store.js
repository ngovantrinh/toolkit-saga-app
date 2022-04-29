import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import catsReducer from '../reducers/catState';
import catSaga from '../saga/catSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});

saga.run(catSaga);

export default store;
