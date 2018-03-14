import * as actions from "../consts/action-types";
import * as uiActions from "../actions/photos";

const uiMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type !== actions.ON_SEARCH) {
        return next(action);
    }

    let {type, payload} = action;
    if (type === actions.ON_SEARCH) {
        dispatch(uiActions.fetchPhotos(payload))
    }
};

export default uiMiddleware;