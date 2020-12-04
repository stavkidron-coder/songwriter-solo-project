import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* getInTheWorksSongs() {
    try {
        const songsResponse = yield axios.get('/songs/in-the-works');
        // console.log('songsResponse:', songsResponse.data);
        yield put({type: 'SET_ITW_SONGS', payload: songsResponse.data});
    }
    catch (error) {
        console.log('ERROR FETCHING', error);
    }
}

function* getCompletedSongs() {
    try {
        const songResponse = yield axios.get('/songs/completed');
        // console.log('completedSongsResponse', songResponse.data);
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
        // console.log('songResponse', songResponse);
        yield action.payload.nav.props.history.push(`/edit-song/${songResponse.data.id}`);
    }
    catch (error) {
        console.log('ERROR in post song saga', error);
    }
}

function* getSongId(action) {
    try {
        const songIdResponse = yield axios.get(`/songs/${action.payload}`);
        // console.log('songIdResponse', songIdResponse.data);
        yield put({type: 'SET_SONG_ID', payload: songIdResponse.data});
    }
    catch (error) {
        console.log('ERROR FETCHING COMPLETED', error);
    }   
}

function* updateSong(action) {
    try {
        const updateSongResponse = yield axios.put(`/songs/update/${action.payload.songId}`, action.payload);
        console.log('updateSongResponse:', updateSongResponse.config.data);
        yield put({type: 'GET_SONG_BY_ID', payload: action.payload.songId});
    }
    catch(error) {
        console.log('ERROR inUPDATE saga', error);
    }
}

function* getSongDataById(action) {
    // console.log('SONGS action:', action.payload);
    
    try {
        const getSongResponse = yield axios.get(`/songs/${action.payload}`);
        // console.log('getResponseById', getSongResponse.data);
        yield put({type: 'GET_SECTIONS_BY_ID', payload: action.payload});
        yield put({type: 'SET_SONG', payload: getSongResponse.data});
    }
    catch (error) {
        console.log('ERROR in getSongById saga', error);
    }
}

function* getRecentSongs(action) {
    console.log('getRecentSongs action', action);
    
    try{
        const recentResponse = yield axios.get(`/songs/recent/${action.payload}`);
        yield put({type: 'SET_RECENT', payload: recentResponse.data});
    }
    catch (error) {
        console.log('ERROR in getRecentSongs saga', error);
    }
}

function* deleteSong(action) {
    try {
        console.log('delete song saga', action.payload);
        yield axios.delete(`/songs/delete/${action.payload}`);
        yield put({type: 'GET_RECENT_SONGS', payload: action.user.id});
        yield action.payload.nav.props.history.push(`/landing-page`);
    }
    catch (error) {
        console.log('error in delete saga', error); 
    }
}

function* songsSaga() {
    yield takeEvery('GET_ITW_SONGS', getInTheWorksSongs);
    yield takeEvery('GET_COMPLETED_SONGS', getCompletedSongs);
    yield takeEvery('ADD_SONG', postSong);
    yield takeEvery('GET_SONG_ID', getSongId);
    yield takeEvery('UPDATE_SONG', updateSong);
    yield takeEvery('GET_SONG_BY_ID', getSongDataById);
    yield takeEvery('GET_RECENT_SONGS', getRecentSongs);
    yield takeEvery('DELETE_SONG', deleteSong);
  }

export default songsSaga;