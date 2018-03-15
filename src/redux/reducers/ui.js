import * as actions from "../consts/action-types";

let initialState = {
    loading: true,
    genericError: false,
    networkError: false,
    searchText: '',
    currentTabIndex: 0,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.START_NETWORK:
            return {...state, loading: true};

        case actions.END_NETWORK:
            return {...state, loading: false};

        case actions.SHOW_GENERIC_ERROR:
            return {...state, genericError: true};

        case actions.HIDE_GENERIC_ERROR:
            return {...state, genericError: false};

        case actions.SHOW_NETWORK_ERROR:
            return {...state, networkError: true};

        case actions.HIDE_NETWORK_ERROR:
            return {...state, networkError: false};

        case actions.ON_SEARCH:
            return {...state, searchText: action.payload};

        case actions.TAB_NEW_INDEX:
            console.log("set tab index", action.payload);
            return {...state, currentTabIndex: action.payload};


        default:
            return state;
    }
};

export default uiReducer;