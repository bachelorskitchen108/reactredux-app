import { legacy_createStore as createStore } from "redux";
import allReducers from './reducers/index';

const myStore = createStore(
    allReducers,
     {},
     window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
     );

export default myStore;