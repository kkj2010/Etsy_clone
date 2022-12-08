import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer
});

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
  );
};

export default configureStore;
