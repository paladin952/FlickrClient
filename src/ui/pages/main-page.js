import React from 'react';
import {FlatList, ImageBackground, Text, View, StyleSheet, Dimensions} from "react-native";
import {connect} from "react-redux";
import * as uiActions from "../../redux/actions/ui";
import SearchBar from 'react-native-searchbar';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import PhotosTabRoute from '../components/photos-tab'
import PeopleTab from '../components/people-tab'
import GroupTab from '../components/group-tab'
import Strings from '../../utils/strings'
import { Header } from 'react-navigation';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class MainPage extends React.Component {

    state = {
        index: 0,
        routes: [
            {key: 'first', title: Strings.t('tab_photos')},
            {key: 'second', title: Strings.t('tab_people')},
            {key: 'third', title: Strings.t('tab_groups')},
        ],
    };

    componentDidMount() {
        this.props.onMount();
    }

    handleChangeText = (input) => {
        this.props.onSearch(input);
    };

    handleIndexChange = index => {
        this.setState({
            index: index
        });
        this.props.onTabChanged(index);
    };

    renderHeader = props => <TabBar {...props} />;

    renderScene = SceneMap({
        first: PhotosTabRoute,
        second: PeopleTab,
        third: GroupTab
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar
                    style={{position: 'static'}}
                    handleChangeText={this.handleChangeText}
                    showOnLoad
                    hideBack
                />

                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    renderHeader={this.renderHeader}
                    onIndexChange={this.handleIndexChange}
                    initialLayout={initialLayout}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Header.HEIGHT
    },
});

const mapStateToProps = state => {
    return {
        photos: state.photos.photos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => dispatch(uiActions.onMount('MainPage')),
        onSearch: (input) => dispatch(uiActions.onSearch(input)),
        onTabChanged: (input) => dispatch(uiActions.onTabChanged(input)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);