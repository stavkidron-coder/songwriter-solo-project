const chordsReducer = (state = [], action) => {
    console.log('action:', action.type);
    switch (action.type) {
      case 'SEND_SECTION':
        console.log('action.payload', action.payload);  
        return action.payload;
      default:
        return state;
    }
};

  export default chordsReducer;