import React from 'react';
import * as actions from "../consts/action-types";
import axios from "axios";
import {endNetwork, hideGenericError, hideLoadMore, hideNetworkError, showLoadMore, startNetwork} from "../actions/ui";

const api = ({dispatch, getState}) => next => action => {

    if (action.type !== actions.API) {
        return next(action);
    }

    const {url, success, failure, method, data, page} = action.payload;
    if (page > 1) {
        dispatch(showLoadMore());
    } else {
        dispatch(startNetwork());
    }
    dispatch(hideGenericError());
    dispatch(hideNetworkError());
    axios({
        url: url,
        method: method,
        data: data
    })
        .then(response => response.data)
        .then(data => {
            dispatch(success(data));
            dispatch(endNetwork());
            dispatch(hideLoadMore());
        })
        .catch(err => {
            dispatch(failure(err));
            dispatch(hideLoadMore());
            dispatch(endNetwork());
        })

};

export default api;
