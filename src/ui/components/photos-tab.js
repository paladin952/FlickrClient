import {FlatList, ImageBackground, TouchableOpacity, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';
import {Card} from "native-base";
import NavigatorService from "../../utils/navigation-service";

class PhotosTabRoute extends React.Component {

    render() {
        return <View style={{flex: 1}}>
            <FlatList
                style={{flex: 1}}
                data={this.props.photos}
                renderItem={(item) => {
                    return <Card style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        height: 250,
                        marginLeft: 16,
                        marginBottom: 8,
                        marginTop: 8,
                        marginRight: 16
                    }}>
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={() => {
                                NavigatorService.navigate('PhotoDetailsPage', {uri: Constants.getPhotoUrl(item.item), title: item.item.title});
                            }}
                        >
                            <ImageBackground
                                style={{flex: 1}}
                                source={{uri: Constants.getPhotoUrl(item.item)}}
                            />
                        </TouchableOpacity>
                    </Card>
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
            />
        </View>
    }
}


const mapStateToProps = state => {
    return {
        photos: state.photos.photos
    }
};
const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotosTabRoute);