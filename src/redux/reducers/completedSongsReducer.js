const completedSongsReducer = (state = [], action) => {
    // console.log('action:', action.type);
    switch (action.type) {
      case 'SET_COMPLETED_SONGS':
        return action.payload;
      default:
        return state;
    }
};

  export default completedSongsReducer;