const key = '6e558a47719bf2c82f7b95b93ebd06ca';
export const SERVER_API = `https://api.flickr.com/services/rest/?api_key=${key}&format=rest&format=json&nojsoncallback=1`;


export const getPhotoUrl = (image) => {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
};

export const getSeachPhotoUrl = (searchText, page) => {
    return `${SERVER_API}&method=flickr.photos.search&text=${searchText}&page=${page}`;
};

export const getSearchGroupUrl = (group, page) => {
    return `${SERVER_API}&method=flickr.groups.search&text=${group}&page=${page}`
};


export const TAB_INDEX_PHOTOS = 0;
export const TAB_INDEX_GROUPS = 1;