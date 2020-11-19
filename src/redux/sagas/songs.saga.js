import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSongs() {
    try {
        const songsResponse = yield axios.get('/songs');
        console.log('songsResponse:', songsResponse.data);
        yield put({type: 'SET_SONGS', payload: songsResponse.data});
    }
    catch (error) {
        console.log('ERROR FETCHING', error);
    }
}

function* songsSaga() {
    yield takeLatest('GET_SONGS', getSongs);
  }

export default songsSaga;