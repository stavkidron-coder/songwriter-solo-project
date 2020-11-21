const SongsReducer = (state = {songId: 0}, action) => {
    // console.log('action:', action.type);
    switch (action.type) {
      case 'SET_SONG':
        console.log('action.payload', action.payload);  
        return action.payload[0];
      default:
        return state;
    }
};

  export default SongsReducer;