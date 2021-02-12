const sectionsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SECTIONS':
        return action.payload;
      default:
        return state;
    }
};

  export default sectionsReducer;