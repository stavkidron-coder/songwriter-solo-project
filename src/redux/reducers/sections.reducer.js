const sectionsReducer = (state = [], action) => {
    console.log('sections reducer action:', action.payload);
    switch (action.type) {
      case 'SET_SECTIONS':
        console.log('action.payload', action.payload);  
        return action.payload;
      default:
        return state;
    }
};

  export default sectionsReducer;