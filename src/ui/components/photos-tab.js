import {FlatList, ImageBackground, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';
import {Card} from "native-base";

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
                        <ImageBackground
                            style={{flex: 1, flexDirection: 'row'}}
                            source={{uri: Constants.getPhotoUrl(item.item)}}
                        />
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