import React from 'react';
import {Image, View} from "react-native";
import {Button, Text} from "native-base";


const PhotoDetailsPage = (props) => {
    console.log('dadadada', props);
    let uri = props.navigation.state.params.uri;
    console.log('dadadada uri', uri);
    return <View style={{flex: 1}}>
        <Image style={{flex: 1}} source={{uri: uri}} resizeMode={'contain'}/>
    </View>
};

export default PhotoDetailsPage;