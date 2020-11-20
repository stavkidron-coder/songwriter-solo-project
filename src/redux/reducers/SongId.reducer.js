const songIdReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_SONG_ID':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default songIdReducer;