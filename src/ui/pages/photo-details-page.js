import React from 'react';
import {Image, Text, View} from "react-native";


const PhotoDetailsPage = (props) => {
    let uri = props.navigation.state.params.uri;
    let title = props.navigation.state.params.title;
    return <View style={{flex: 1}}>
        <Image style={{flex: 1}} source={{uri: uri}} resizeMode={'contain'}/>

        <Text style={{position: 'absolute', bottom: 16, alignSelf: 'center', fontWeight: 'bold', fontSize: 22, textAlign: 'center', padding: 16}}>
            {title}
        </Text>
    </View>
};

export default PhotoDetailsPage;