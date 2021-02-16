const recentSongsReducer = (state = [], action) => {
    // console.log('action:', action.payload);
    switch (action.type) {
      case 'SET_RECENT':
        return action.payload;
      default:
        return state;
    }
};

  export default recentSongsReducer;