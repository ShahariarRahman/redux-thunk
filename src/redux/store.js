import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middleware/cartCounter";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;