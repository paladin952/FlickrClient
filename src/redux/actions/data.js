import {fetchPhotos} from "./photo";
import {fetchGroups} from "./group";

export const fetchData = (currentTabIndex, input) => {
    if (currentTabIndex === 0) {
        return fetchPhotos(input)
    } else if (currentTabIndex === 1) {
        return fetchGroups(input)
    }
};