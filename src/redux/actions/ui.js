import * as actions from "../consts/action-types";

export const startNetwork = () => ({
    type: actions.START_NETWORK,
});

export const endNetwork = () => ({
    type: actions.END_NETWORK,
});

export const showGenericError = () => ({
    type: actions.SHOW_GENERIC_ERROR,
});

export const hideGenericError = () => ({
    type: actions.HIDE_GENERIC_ERROR,
});

export const showNetworkError = () => ({
    type: actions.SHOW_NETWORK_ERROR,
});

export const hideNetworkError = () => ({
    type: actions.HIDE_NETWORK_ERROR,
});

export const onMount = (page) => ({
    type: actions.PAGE_MOUNTED,
    payload: page
});

export const onSearch = (input) => ({
    type: actions.ON_SEARCH,
    payload: input,
    meta: {
        debounce: 500
    }
});

export const onTabChanged = (newIndex) => ({
    type: actions.TAB_NEW_INDEX,
    payload: newIndex
});

export const onClearSearch = () => ({
   type: actions.ON_CLEAR_SEARCH,
});