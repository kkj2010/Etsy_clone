import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer
});

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
  );
};

export default configureStore;
