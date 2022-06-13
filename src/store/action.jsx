import axios from "axios"

export const setData = (payload) => ({
    type: "SET_SEARCH",
    payload,
});

export const setIsLoading = (payload) => ({
    type: "SET_ISLOADING",
    payload,
});

export const setMovie = (payload) => ({
    type: "SET_MOVIE",
    payload,
})


export const fetchSearch = (searchTerm) => async( dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4b4d03baae6c0065365ca17ffa81ad75&query=${searchTerm}`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.result));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
}

export const fetchMovie = () => async( dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b4d03baae6c0065365ca17ffa81ad75&page1`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.result));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
}