import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middleware/cartCounter";
import logger from "redux-logger";
import thunk from "redux-thunk";
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;