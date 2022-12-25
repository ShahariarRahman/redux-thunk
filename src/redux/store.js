import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

// composeWithDevTools()
const store = createStore(rootReducer, applyMiddleware());

export default store;
