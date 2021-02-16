const SongsReducer = (state = {songId: 0}, action) => {
    switch (action.type) {
      case 'SET_SONG':
        return action.payload[0];
      default:
        return state;
    }
};

  export default SongsReducer;