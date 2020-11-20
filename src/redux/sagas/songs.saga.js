import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getInTheWorksSongs() {
    try {
        const songsResponse = yield axios.get('/songs/in-the-works');
        console.log('songsResponse:', songsResponse.data);
        yield put({type: 'SET_ITW_SONGS', payload: songsResponse.data});
    }
    catch (error) {
        console.log('ERROR FETCHING', error);
    }
}

function* getCompletedSongs() {
    try {
        const songResponse = yield axios.get('/songs/completed');
        console.log('completedSongsResponse', songResponse.data);
        yield put({type: 'SET_COMPLETED_SONGS', payload: songResponse.data});
    }
    catch (error) {
        console.log('ERROR FETCHING COMPLETED', error);
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
    yield takeLatest('GET_ITW_SONGS', getInTheWorksSongs);
    yield takeLatest('GET_COMPLETED_SONGS', getCompletedSongs);
    yield takeLatest('ADD_SONG', postSong)
  }

export default songsSaga;