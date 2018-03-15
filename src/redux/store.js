import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import api from "./middleswares/api";
import ui from "./reducers/ui";
import photo from "./reducers/photo";
import group from "./reducers/group";
import multi from "./middleswares/multi";
import uiMiddleware from "./middleswares/ui";
import logger from "./middleswares/logger";
import takeLast from "./middleswares/take-last";


const store = createStore(
    combineReducers({
        ui,
        photo,
        group
    }), compose(
        applyMiddleware(
            logger,
            takeLast,
            api,
            multi,
            uiMiddleware,
        )
    )
);

window.store = store;
export default store;