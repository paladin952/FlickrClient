import {fetchPhotos} from "./photo";
import {fetchGroups} from "./group";
import {TAB_INDEX_GROUPS, TAB_INDEX_PHOTOS} from "../../utils/constants";

export const fetchData = (currentTabIndex, input) => {
    if (currentTabIndex === TAB_INDEX_PHOTOS) {
        return fetchPhotos(input)
    } else if (currentTabIndex === TAB_INDEX_GROUPS) {
        return fetchGroups(input)
    }
};