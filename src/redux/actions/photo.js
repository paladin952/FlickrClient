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
                //TODO check if any data otherwise show message
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

export const setPhotos = (photos) => ({
    type: actions.SET_PHOTOS,
    payload: photos
});

export const setMorePhotos = (photos) => ({
    type: actions.SET_MORE_PHOTOS,
    payload: photos
});

export const incrementPhotosPage = () => ({
    type: actions.INCREMENT_PHOTOS_PAGE,
});

export const loadMorePhotos = () => ({
    type: actions.LOAD_MORE_PHOTOS,
});

export const resetPhotosPage = () => ({
    type: actions.RESET_PHOTOS_PAGE,
});