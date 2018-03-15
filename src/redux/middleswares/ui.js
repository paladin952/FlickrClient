import * as actions from "../consts/action-types";
import * as uiActions from "../actions/ui";
import * as photosActions from "../actions/photo";
import * as groupsActions from "../actions/group";
import * as dataActions from "../actions/data";
import {TAB_INDEX_GROUPS, TAB_INDEX_PHOTOS} from "../../utils/constants";

const uiMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type !== actions.ON_SEARCH && action.type !== actions.LOAD_MORE_PHOTOS && action.type !== actions.LOAD_MORE_GROUPS
        && action.type !== actions.TAB_NEW_INDEX) {
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
        if (!getState().ui.isLoadingMore && getState().photo.photos.length > 0) {
            dispatch(photosActions.fetchPhotos(getState().ui.searchText, getState().photo.photosCurrentPage + 1));
            dispatch(photosActions.incrementPhotosPage())
        }
    }

    if (type === actions.LOAD_MORE_GROUPS) {
        //skip if multiple times or empty data
        if (!getState().ui.isLoadingMore && getState().group.groups.length > 0) {
            dispatch(groupsActions.fetchGroups(getState().ui.searchText, getState().group.groupsCurrentPage + 1));
            dispatch(groupsActions.incrementGroupsPage())
        }
    }

    if (type === actions.TAB_NEW_INDEX && getState().ui.searchText) {
        if (action.payload === TAB_INDEX_PHOTOS && getState().photo.photos.length === 0) {
            dispatch(dataActions.fetchData(TAB_INDEX_PHOTOS, payload));
        } else if (action.payload === TAB_INDEX_GROUPS && getState().group.groups.length === 0) {
            dispatch(dataActions.fetchData(TAB_INDEX_GROUPS, payload));
        }
        next(action);
    }
};

export default uiMiddleware;