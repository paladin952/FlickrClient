import React from 'react';
import {Image, View} from "react-native";


const PhotoDetailsPage = (props) => {
    let uri = props.navigation.state.params.uri;
    return <View style={{flex: 1}}>
        <Image style={{flex: 1}} source={{uri: uri}} resizeMode={'contain'}/>
    </View>
};

export default PhotoDetailsPage;