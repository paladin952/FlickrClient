import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import api from "./middleswares/api";
import ui from "./reducers/ui";
import multi from "./middleswares/multi";


const store = createStore(
    combineReducers({
        ui,
    }), compose(
        applyMiddleware(
            api,
            multi,
        )
    )
);

window.store = store;
export default store;