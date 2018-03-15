import {ActivityIndicator, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';
import {Card} from "native-base";
import NavigatorService from "../../utils/navigation-service";
import * as dataActions from "../../redux/actions/data";
import Strings from '../../utils/strings';

class PhotosTabRoute extends React.Component {

    render() {
        if (this.props.loading) {
            return <ActivityIndicator size={'large'} style={{alignSelf: 'center'}}/>
        }
        if (this.props.networkError) {
            return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{Strings.t('network_error')}</Text>
            </View>
        }

        if (this.props.genericError) {
            return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{Strings.t('generic_error')}</Text>
            </View>
        }

        if (this.props.photos.length === 0) {
            return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{Strings.t('empty_data')}</Text>
            </View>
        }


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
                ListFooterComponent={() => {
                    return (
                        this.props.isLoadingMore
                            ? <View key={'indicator'} style={{flex: 1, padding: 10}}>
                                <ActivityIndicator size="small"/>
                            </View>
                            : null
                    );
                }}
                onEndReached={() => {
                    this.props.loadMorePhotos();
                    console.log('luci', "ON END REACHED PHOTOS");
                }}
            />
        </View>
    }
}


const mapStateToProps = state => {
    return {
        loading: state.ui.loading,
        photos: state.photo.photos,
        isLoadingMore: state.ui.isLoadingMore,
        networkError: state.ui.networkError,
        genericError: state.ui.genericError
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadMorePhotos: () => dispatch(dataActions.loadMorePhotos())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotosTabRoute);