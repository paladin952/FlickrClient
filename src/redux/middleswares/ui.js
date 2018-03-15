import * as actions from "../consts/action-types";
import * as dataActions from "../actions/data";
import * as uiActions from "../actions/ui";

const uiMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type !== actions.ON_SEARCH) {
        return next(action);
    }

    let {type, payload} = action;
    if (type === actions.ON_SEARCH) {
        if (payload && payload.length > 0) {
            dispatch(dataActions.fetchData(getState().ui.currentTabIndex || 0, payload));
        } else {
            dispatch(uiActions.onClearSearch())
        }
        next(action);
    }
};

export default uiMiddleware;