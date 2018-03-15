import * as actions from "../consts/action-types";

let initialData = {groups: [], groupsCurrentPage: 1};
const groupReducer = (state = initialData, action) => {
    switch (action.type) {

        case actions.SET_GROUPS:
            return {...state, groups: action.payload.groups.group};

        case actions.ON_CLEAR_SEARCH:
            return {...state, groups: [], groupsCurrentPage: 1};

        case actions.INCREMENT_GROUPS_PAGE:
            return {...state, groupsCurrentPage: state.groupsCurrentPage + 1};

        case actions.SET_MORE_GROUPS:
            return {...state, groups: state.groups.concat(action.payload.groups.group)};

        case actions.RESET_GROUPS_PAGE:
            return {...state, groupsCurrentPage: 1};


        default:
            return state;
    }
};

export default groupReducer;