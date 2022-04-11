import {combineReducers, createStore} from "redux";
import themeReducer from "../reducers/themeReducer";
import controlReducer from "../reducers/controlReducer";
import regionReducer from "../reducers/regionReducer";
import countryReducer from "../reducers/countryReducer";

let reducers = combineReducers({
    appTheme: themeReducer,
    control: controlReducer,
    regionData: regionReducer,
    countriesInfo: countryReducer
})

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;