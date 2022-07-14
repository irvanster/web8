import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store' //v2
import MainNavigation from './mainNavigation'

// import configureStore from './redux/store' //v1

// const {store, persistor} = configureStore() //v1
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation/>
      </PersistGate>
    </Provider>
  );
};

export default App;

//tanpa redux persist
// import { Provider } from "react-redux";
// // import { PersistGate } from 'redux-persist/integration/react'
// import {store, persistor} from './redux/store'
// const App = () => {
//   return (
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//         <MainNavigation/>
//       {/* </PersistGate> */}
//     </Provider>
//   );
// };

// export default App;
