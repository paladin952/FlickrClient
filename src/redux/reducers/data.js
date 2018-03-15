import * as actions from "../consts/action-types";

let initialData = {photos: [], photosCurrentPage: 1, groups: [], groupsCurrentPage: 1};
const photosReducer = (state = initialData, action) => {
    switch (action.type) {

        case actions.SET_PHOTOS:
            return {...state, photos: action.payload.photos.photo};

        case actions.SET_GROUPS:
            return {...state, groups: action.payload.groups.group};

        case actions.ON_CLEAR_SEARCH:
            return {...state, photos: [], groups: [], photosCurrentPage: 1, groupsCurrentPage: 1};

        case actions.INCREMENT_PHOTOS_PAGE:
            return {...state, photosCurrentPage: state.photosCurrentPage + 1};

        case actions.INCREMENT_GROUPS_PAGE:
            return {...state, groupsCurrentPage: state.groupsCurrentPage + 1};

        case actions.SET_MORE_PHOTOS:
            return {...state, photos: state.photos.concat(action.payload.photos.photo)};

        case actions.SET_MORE_GROUPS:
            return {...state, groups: state.groups.concat(action.payload.groups.group)};

        case actions.RESET_PHOTOS_PAGE:
            return {...state, photosCurrentPage: 1};

        case actions.RESET_GROUPS_PAGE:
            return {...state, groupsCurrentPage: 1};


        default:
            return state;
    }
};

export default photosReducer;