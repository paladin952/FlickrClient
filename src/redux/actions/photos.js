import * as actions from "../consts/action-types";
import * as Constants from "../../utils/constants";
import {showGenericError, showNetworkError} from "./ui";

export const fetchPhotos = (input) => ({
    type: actions.API,
    payload: {
        url: Constants.getSearchUrl(input),
        method: 'GET',
        success: (photos) => {
            return setPhotos(photos)
        },
        failure: (err) => {
            if(!err.status) {
                return showNetworkError();
            } else {
                return showGenericError()
            }
        }

    }
});

export const setPhotos = (photos) => ({
    type: actions.SET_PHOTOS,
    payload: photos
});