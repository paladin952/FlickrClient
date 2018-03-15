import {ActivityIndicator, FlatList, ImageBackground, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';
import {Card} from "native-base";
import NavigatorService from "../../utils/navigation-service";
import Strings from '../../utils/strings';
import * as photosActions from "../../redux/actions/photo";

class PhotosTabRoute extends React.Component {

    render() {
        if (this.props.loading) {
            return <ActivityIndicator size={'large'} style={{alignSelf: 'center'}}/>
        }
        if (this.props.networkError) {
            return <View style={styles.errorContainer}>
                <Text>{Strings.t('network_error')}</Text>
            </View>
        }

        if (this.props.genericError) {
            return <View style={styles.errorContainer}>
                <Text>{Strings.t('generic_error')}</Text>
            </View>
        }

        if (this.props.photos.length === 0) {
            return <View style={styles.errorContainer}>
                <Text>{Strings.t('empty_data')}</Text>
            </View>
        }


        return <View style={styles.root}>
            <FlatList
                style={styles.list}
                data={this.props.photos}
                renderItem={(item) => {
                    return <Card style={styles.cardContainer}>
                        <TouchableOpacity
                            style={styles.touchContainer}
                            onPress={() => {
                                NavigatorService.navigate('PhotoDetailsPage', {uri: Constants.getPhotoUrl(item.item), title: item.item.title});
                            }}
                        >
                            <ImageBackground
                                style={styles.imageBackground}
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
                            ? <View key={'indicator'} style={styles.loadingContainer}>
                                <ActivityIndicator size="small"/>
                            </View>
                            : null
                    );
                }}
                onEndReached={() => {
                    this.props.loadMorePhotos();
                }}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        flex: 1
    },
    list: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        padding: 10
    },
    imageBackground: {
        flex: 1,
    },
    touchContainer: {
        flex: 1
    },
    cardContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 250,
        marginLeft: 16,
        marginBottom: 8,
        marginTop: 8,
        marginRight: 16
    }
});

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
        loadMorePhotos: () => dispatch(photosActions.loadMorePhotos())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotosTabRoute);