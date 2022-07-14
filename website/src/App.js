import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import MainNavigation from './mainNavigation'
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
