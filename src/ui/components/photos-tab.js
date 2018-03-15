import {FlatList, ImageBackground, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';

class PhotosTabRoute extends React.Component {

    render() {
        return <View style={{flex: 1}}>
            <FlatList
                style={{flex: 1}}
                data={this.props.photos}
                renderItem={(item) => {
                    return <View style={{borderBottomColor: 'black', borderBottomWidth: 1, height: 250, paddingLeft: 16, paddingRight: 16}}>
                        <ImageBackground
                            style={{flex: 1, flexDirection: 'row'}}
                            source={{uri: Constants.getPhotoUrl(item.item)}}
                        />
                    </View>
                }}
                keyExtractor={(item, index) => {
                    return index;
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