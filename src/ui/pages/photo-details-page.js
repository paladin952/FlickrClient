import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";


const PhotoDetailsPage = (props) => {
    let uri = props.navigation.state.params.uri;
    let title = props.navigation.state.params.title;
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={{uri: uri}} resizeMode={'cover'}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 4,
        color: 'black'
    },
    textContainer: {
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center'
    },
    image: {
        flex: 1
    },
    root: {
        flex: 1,
    }
});

export default PhotoDetailsPage;