import * as actions from "../consts/action-types";

let initialData = {photos: []};

const photosReducer = (state = initialData, action) => {
    switch (action.type) {
        case actions.SET_PHOTOS:
            return {...state, photos: action.payload.photos.photo};

        default:
            return state;
    }
};

export default photosReducer;