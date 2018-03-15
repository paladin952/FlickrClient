import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import api from "./middleswares/api";
import ui from "./reducers/ui";
import data from "./reducers/data";
import multi from "./middleswares/multi";
import uiMiddleware from "./middleswares/ui";
import logger from "./middleswares/logger";


const store = createStore(
    combineReducers({
        ui,
        data
    }), compose(
        applyMiddleware(
            logger,
            api,
            multi,
            uiMiddleware
        )
    )
);

window.store = store;
export default store;