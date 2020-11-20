import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

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
        const songResponse = yield axios.post('/songs');
        console.log('songResponse', songResponse);
        yield action.payload.nav.props.history.push(`/edit-song/${songResponse.data.id}`);
    }
    catch (error) {
        console.log('ERROR in post song saga', error);
    }
}

function* getSongId(action) {
    try {
        const songIdResponse = yield axios.get(`/songs/${action.payload}`);
        console.log('songIdResponse', songIdResponse.data);
        yield put({type: 'SET_SONG_ID', payload: songIdResponse.data});
    }
    catch (error) {
        console.log('ERROR FETCHING COMPLETED', error);
    }
    
}

function* songsSaga() {
    yield takeLatest('GET_ITW_SONGS', getInTheWorksSongs);
    yield takeLatest('GET_COMPLETED_SONGS', getCompletedSongs);
    yield takeLatest('ADD_SONG', postSong)
    yield takeEvery('GET_SONG_ID', getSongId)
  }

export default songsSaga;