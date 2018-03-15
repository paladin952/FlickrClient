import * as actions from "../consts/action-types";
import * as Constants from "../../utils/constants";
import {showGenericError, showNetworkError} from "./ui";

export const fetchPhotos = (input, page = 1) => ({
    type: actions.API,
    payload: {
        url: Constants.getSeachPhotoUrl(input, page),
        method: 'GET',
        page: page,
        success: (data) => {
            if (page > 1) {
                return setMorePhotos(data);
            } else {
                return [setPhotos(data), resetPhotosPage()]
            }
        },
        failure: (err) => {
            if (!err.status) {
                return showNetworkError();
            } else {
                return showGenericError()
            }
        }
    },
});

export const fetchGroups = (input, page = 1) => ({
    type: actions.API,
    payload: {
        url: Constants.getSearchGroupUrl(input, page),
        method: 'GET',
        page: page,
        success: (data) => {
            if (page > 1) {
                return setMoreGroups(data)
            } else {
                return [setGroups(data), resetGroupsPage()]
            }
        },
        failure: (err) => {
            if (!err.status) {
                return showNetworkError();
            } else {
                return showGenericError()
            }
        }
    },
});

export const fetchData = (currentTabIndex, input) => {
    if (currentTabIndex === 0) {
        return fetchPhotos(input)
    } else if (currentTabIndex === 1) {
        return fetchGroups(input)
    }
};

export const setPhotos = (photos) => ({
    type: actions.SET_PHOTOS,
    payload: photos
});

export const setMorePhotos = (photos) => ({
    type: actions.SET_MORE_PHOTOS,
    payload: photos
});

export const setMoreGroups = (groups) => ({
    type: actions.SET_MORE_GROUPS,
    payload: groups
});

export const setGroups = (groups) => ({
    type: actions.SET_GROUPS,
    payload: groups
});

export const incrementPhotosPage = () => ({
    type: actions.INCREMENT_PHOTOS_PAGE,
});

export const incrementGroupsPage = () => ({
    type: actions.INCREMENT_GROUPS_PAGE,
});

export const loadMorePhotos = () => ({
    type: actions.LOAD_MORE_PHOTOS,
});

export const loadMoreGroups = () => ({
    type: actions.LOAD_MORE_GROUPS,
});

export const resetPhotosPage = () => ({
    type: actions.RESET_PHOTOS_PAGE,
});

export const resetGroupsPage = () => ({
    type: actions.RESET_GROUPS_PAGE,
});