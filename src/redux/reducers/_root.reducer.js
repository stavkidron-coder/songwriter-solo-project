import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import itwSongs from './itwSongs.reducer.js';
import completedSongs from './completedSongsReducer';
import songIdReducer from './SongId.reducer';
import songsReducer from './songs.reducer';
import sectionsReducer from './sections.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  itwSongs,
  completedSongs,
  songIdReducer,
  songsReducer,
  sectionsReducer
});

export default rootReducer;
