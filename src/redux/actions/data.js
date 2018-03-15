import * as actions from "../consts/action-types";
import * as Constants from "../../utils/constants";
import {showGenericError, showNetworkError} from "./ui";
import {getSearchGroupUrl} from "../../utils/constants";

export const fetchPhotos = (input) => ({
    type: actions.API,
    payload: {
        url: Constants.getSeachPhotoUrl(input),
        method: 'GET',
        success: (data) => {
            return setPhotos(data)
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

export const fetchPeople = (input) => ({
    type: actions.API,
    payload: {
        url: Constants.getSearchPeopleUrl(input),
        method: 'GET',
        success: (data) => {
            return setPeople(data)
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

export const fetchGroups = (input) => ({
    type: actions.API,
    payload: {
        url: Constants.getSearchGroupUrl(input),
        method: 'GET',
        success: (data) => {
            return setGroups(data)
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
        return fetchPeople(input)
    } else {
        return fetchGroups(input)
    }
};

export const setPhotos = (photos) => ({
    type: actions.SET_PHOTOS,
    payload: photos
});


export const setPeople = (people) => ({
    type: actions.SET_PEOPLE,
    payload: people
});

export const setGroups = (groups) => ({
    type: actions.SET_GROUPS,
    payload: groups
});