const initialState = 3;

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT": 
      return state + 1;
    case "DECREMENT": 
      return state - 1;
    // case "RAND": 
    //   return state + action.payload;
    default:
      return state;
  }
}

export default reducer;