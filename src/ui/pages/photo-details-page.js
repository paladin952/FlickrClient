import React from 'react';
import {Image, Text, View} from "react-native";


const PhotoDetailsPage = (props) => {
    let uri = props.navigation.state.params.uri;
    let title = props.navigation.state.params.title;
    return <View style={{flex: 1}}>
        <Image style={{flex: 1}} source={{uri: uri}} resizeMode={'cover'}/>

        <View
            style={{
                borderRadius: 16,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                position: 'absolute',
                bottom: 16,
                alignSelf: 'center'
            }}
        >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                padding: 4,
                color: 'black'
            }}>
                {title}
            </Text>
        </View>
    </View>
};

export default PhotoDetailsPage;