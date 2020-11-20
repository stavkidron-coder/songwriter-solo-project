const completedSongsReducer = (state = [], action) => {
    console.log('action:', action.type);
    switch (action.type) {
      case 'SET_COMPLETED_SONGS':
        console.log('action.payload', action.payload);  
        return action.payload;
      default:
        return state;
    }
};

  export default completedSongsReducer;