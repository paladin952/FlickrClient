import I18n from 'react-native-i18n';


I18n.translations = {
    en: {
        tab_photos: 'PHOTOS',
        tab_groups: 'GROUPS',
        members: 'members',
        member: 'member',
        empty_data: 'There is no data',
        network_error: 'Check your internet connection and try again!',
        generic_error: 'Something went wrong. Try again!',
    }
};

I18n.fallbacks = true;
export default I18n;