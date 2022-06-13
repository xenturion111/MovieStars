const initialState = {
    movie: [],
    searchMovie: [],
    isLoading: false,
  };
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case "SET_MOVIE" :
       return {
         ...state,
         movie: action.payload,
       };
     case "SET_SEARCH" :
       return {
         ...state,
         searchMovie: action.payload,
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