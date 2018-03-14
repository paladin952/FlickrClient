import React from 'react';
import {FlatList, ImageBackground, Text, View, StyleSheet, Dimensions} from "react-native";
import {connect} from "react-redux";
import * as uiActions from "../../redux/actions/ui";
import SearchBar from 'react-native-searchbar';
import * as Constants from "../../utils/constants";
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};
const PhotosRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const PeopleRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const GroupsRoute = () => <View style={[ styles.container, { backgroundColor: '#FFFFB0' } ]} />;

class MainPage extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
            { key: 'third', title: 'third' },
        ],
    };

    componentDidMount() {
        this.props.onMount();
    }

    handleChangeText = (input) => {
        this.props.onSearch(input);
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        first: PhotosRoute,
        second: PeopleRoute,
        third: GroupsRoute
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar
                    handleChangeText={this.handleChangeText}
                    showOnLoad
                    hideBack
                />

                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                />

                {/*<FlatList*/}
                    {/*style={{flex: 1, marginTop: 100}}*/}
                    {/*data={this.props.photos}*/}
                    {/*renderItem={(item) => {*/}
                        {/*return <View style={{borderBottomColor: 'black', borderBottomWidth: 1, height: 250, paddingLeft: 4, paddingBottom: 4, paddingRight: 4}}>*/}
                            {/*<ImageBackground*/}
                                {/*style={{flex: 1, flexDirection: 'row'}}*/}
                                {/*source={{uri: Constants.getPhotoUrl(item.item)}}*/}
                            {/*/>*/}
                        {/*</View>*/}
                    {/*}}*/}
                    {/*keyExtractor={(item, index) => {*/}
                        {/*return index;*/}
                    {/*}}*/}

                {/*/>*/}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
    },
});

const mapStateToProps = state => {
    return {
        photos: state.photos.photos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => dispatch(uiActions.onMount('MainPage')),
        onSearch: (input) => dispatch(uiActions.onSearch(input)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);