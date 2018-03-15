import * as actions from "../consts/action-types";
import * as dataActions from "../actions/data";
import * as uiActions from "../actions/ui";

const uiMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type !== actions.ON_SEARCH && action.type !== actions.LOAD_MORE_PHOTOS && action.type !== actions.LOAD_MORE_GROUPS) {
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

    if (type === actions.LOAD_MORE_PHOTOS) {
        //skip if multiple times or empty data
        if (!getState().ui.isLoadingMore && getState().data.photos.length > 0) {
            let data = getState().data;
            dispatch(dataActions.fetchPhotos(data.searchText, data.photosCurrentPage + 1));
            dispatch(dataActions.incrementPhotosPage())
        }
    }

    if (type === actions.LOAD_MORE_GROUPS) {
        //skip if multiple times or empty data
        if (!getState().ui.isLoadingMore && getState().data.groups.length > 0) {
            let data = getState().data;
            dispatch(dataActions.fetchGroups(data.searchText, data.groupsCurrentPage + 1));
            dispatch(dataActions.incrementGroupsPage())
        }
    }
};

export default uiMiddleware;