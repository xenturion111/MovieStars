const initialState = {
    SearchMovie: [],
    isLoading: false,
  };
  const reducers = (state = initialState, action) => {
    switch (action.type) {
     case "SET_SEARCH" :
       return {
         ...state,
         SearchMovie: action.payload,
       };
      case "SET_ISLOADING":
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  };


  




  export default reducers;