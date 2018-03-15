import * as actions from "../consts/action-types";
import * as Constants from "../../utils/constants";
import {showGenericError, showNetworkError} from "./ui";

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

export const setMoreGroups = (groups) => ({
    type: actions.SET_MORE_GROUPS,
    payload: groups
});

export const setGroups = (groups) => ({
    type: actions.SET_GROUPS,
    payload: groups
});

export const incrementGroupsPage = () => ({
    type: actions.INCREMENT_GROUPS_PAGE,
});

export const loadMoreGroups = () => ({
    type: actions.LOAD_MORE_GROUPS,
});

export const resetGroupsPage = () => ({
    type: actions.RESET_GROUPS_PAGE,
});