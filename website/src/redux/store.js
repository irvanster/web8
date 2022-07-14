//dengan redux persist
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}


//tanpa redux persist (base redux)
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// export default () => {
//   let store = createStore(rootReducer)
//   return { store }
// }