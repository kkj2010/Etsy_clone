import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
// import { csrfFetch } from "./csrf";
// import * as sessionActions from './reducers/userReducer'

// if (process.env.NODE_ENV !== "production") {

//   window.csrfFetch = csrfFetch;
//   window.sessionActions = sessionActions;

// }

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
  );
};

export default configureStore;
