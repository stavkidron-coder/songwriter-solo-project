import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postSection(action) {
    try {
        yield axios.post('/sections', action.payload);       
        yield put({type: 'SET_SECTION'});
    }
    catch (error) {
        console.log('ERROR SETTING SECTION', error);
    }
}

function* sectionSaga() {
    yield takeEvery('ADD_SECTION', postSection);
  }

  export default sectionSaga;