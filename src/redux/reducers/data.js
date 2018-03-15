import * as actions from "../consts/action-types";

let initialData = {photos: [], people: [], groups: []};

const photosReducer = (state = initialData, action) => {
    switch (action.type) {

        case actions.SET_PHOTOS:
            return {...state, photos: action.payload.photos.photo};

        case actions.SET_PEOPLE:
            return {...state, people: action.payload};

        case actions.SET_GROUPS:
            return {...state, groups: action.payload.groups.group};

        default:
            return state;
    }
};

export default photosReducer;