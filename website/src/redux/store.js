//dengan redux persist
import { createStore, applyMiddleware } from 'redux' //add this
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'
import thunk from 'redux-thunk' //add this
import logger from 'redux-logger' //addthis

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk, logger)) //add this
let persistor = persistStore(store)
export {
  store,
  persistor
} //v2

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// } //v1


//tanpa redux persist (base redux)
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// export default () => {
//   let store = createStore(rootReducer)
//   return { store }
// }