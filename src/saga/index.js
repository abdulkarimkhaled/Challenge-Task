/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import generalSaga from './generalSaga';

export default function* watch() {
    yield all([takeEvery("REQUEST_ACTION", generalSaga)]);
}
