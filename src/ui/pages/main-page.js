import React from 'react';
import {FlatList, ImageBackground, Text, View} from "react-native";
import {connect} from "react-redux";
import * as uiActions from "../../redux/actions/ui";
import SearchBar from 'react-native-searchbar';
import * as Constants from "../../utils/constants";

class MainPage extends React.Component {

    componentDidMount() {
        this.props.onMount();
    }

    handleChangeText = (input) => {
        console.log("luci", input);
        this.props.onSearch(input);
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar
                    handleChangeText={this.handleChangeText}
                    showOnLoad
                    hideBack
                />

                <FlatList
                    style={{flex: 1, marginTop: 100}}
                    data={this.props.photos}
                    renderItem={(item) => {
                        return <View style={{borderBottomColor: 'black', borderBottomWidth: 1, height: 100}}>
                            <ImageBackground
                                style={{width: '100%', height: 300}}
                                source={{uri: Constants.getPhotoUrl(item.item)}}
                            />
                        </View>
                    }}
                    keyExtractor={(item, index) => {
                        return index;
                    }}

                />
            </View>
        )
    }

}

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