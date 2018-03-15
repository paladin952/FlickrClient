import * as actions from "../consts/action-types";
import * as uiActions from "../actions/data";

const uiMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type !== actions.ON_SEARCH) {
        return next(action);
    }

    let {type, payload} = action;
    if (type === actions.ON_SEARCH) {
        dispatch(uiActions.fetchData(getState().ui.currentTabIndex || 0, payload));
        next(action);
    }

    // if (type === actions.TAB_NEW_INDEX) {
    //     next(action);
    //     dispatch(uiActions.fetchData(payload, getState().ui.searchText));
    // }
};

export default uiMiddleware;