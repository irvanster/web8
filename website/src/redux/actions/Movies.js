import axios from "axios";

const GetMoviesRequest = () => {
  return {
    type: "GET_MOVIES_REQUEST",
  };
};

const GetMoviesSucess = (data) => {
  return {
    type: "GET_MOVIES_SUCCESS",
    payload: data
  };
};

const GetMoviesError = (error) => {
    return {
        type: "GET_MOVIES_ERROR",
        payload: error
    };
};

export const GetMovies = () => {
    return (dispatch) => {
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: "https://test.dhanz.me/api/v1/movies",
        }) .then((res)=> { //ketika sukses, dispatch sucess
            dispatch(GetMoviesSucess(res.data)) //trigger / dispatch
        }).catch((err)=> {
            dispatch(GetMoviesError(err))
        })
    }
};




// return (dispatch) => {
//     dispatch(GetMoviesRequest())
//     try {
//         const result = axios({
//             method: "GET",
//             url: "https://test.dhanz.me/api/v1/movies",
//         })
//         dispatch(GetMoviesSucess(result.data))
//     } catch (error) {
//         dispatch(GetMoviesRequest(err.response))
//     }
// }