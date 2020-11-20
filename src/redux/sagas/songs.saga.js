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

function* postSong(action){
    console.log('post saga action.payload', action.payload);
    
    try {
        yield axios.post('/songs', action.payload);
    }
    catch (error) {
        console.log('ERROR in post song saga', error);
    }
}

function* songsSaga() {
    yield takeLatest('GET_SONGS', getSongs);
    yield takeLatest('ADD_SONG', postSong)
  }

export default songsSaga;