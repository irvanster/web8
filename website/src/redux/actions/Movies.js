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

export const GetMovies = ({page=1, limit}) => {
    return (dispatch) => {
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: `https://test.dhanz.me/api/v1/movies${page ? `?page=${page}`:``}${limit ? `&limit=${limit}`:``}`,
          }) .then((res)=> { //ketika sukses, dispatch sucess
            dispatch(GetMoviesSucess(res.data.data))
            // dispatch(GetMoviesSucess(res.data.data.results)) //trigger / dispatch
            //res.data.data.results, mengkorbankan, data lain kayak totalpage, totalRow gabisa ngambil//v1 (BAD)
            // if(res.data.message === "EMPTY") {
            //   dispatch(GetMoviesSucess(res.data.message)) 
            // }
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