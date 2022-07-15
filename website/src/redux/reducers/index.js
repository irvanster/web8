import { combineReducers } from 'redux'
import Movies from '../reducers/Movies'
import Auth from '../reducers/Auth'
const rootReducers = combineReducers({
    movies: Movies,
    auth: Auth
})
export default rootReducers