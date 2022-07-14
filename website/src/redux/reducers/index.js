import { combineReducers } from 'redux'
import Movies from '../reducers/Movies'
const rootReducers = combineReducers({
    movies: Movies
})
export default rootReducers