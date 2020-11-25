import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postSection(action) {
    console.log('section object in saga', action.payload);
    
    try {
        yield axios.post('/sections', action.payload);       
        yield put({type: 'SET_SECTION'});
    }
    catch (error) {
        console.log('ERROR SETTING SECTION', error);
    }
}

function* getSections(action) {
    console.log('section object in GET saga', action.payload);
    
    try {
        const sectionsResponse = yield axios.get(`/sections/${action.payload}`);
        yield put({type: 'SET_SECTIONS', payload: sectionsResponse.data});
    }
    catch (error) {
        console.log('ERROR in sections get saga', error);
    }
}

function* deleteSection(action) {
    try {
        console.log('delete song saga', action.payload);
        yield axios.delete(`/sections/delete/${action.payload.sectionId}`);
        yield put({type: 'GET_SECTIONS_BY_ID', payload: action.payload.songId});
    }
    catch (error) {
        console.log('error in delete saga', error); 
    }
}

function* sectionSaga() {
    yield takeEvery('ADD_SECTION', postSection);
    yield takeEvery('GET_SECTIONS_BY_ID', getSections);
    yield takeEvery('DELETE_SECTION', deleteSection);
  }

  export default sectionSaga;