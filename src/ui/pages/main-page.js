import React from 'react';
import {Text, View} from "react-native";
import {connect} from "react-redux";
import * as uiActions from "../../redux/actions/ui";
import SearchBar from 'react-native-searchbar';

class MainPage extends React.Component {

    componentDidMount() {
        this.props.onMount();
    }

    handleChangeText = (input) => {
        console.log("luci", input);
        this.props.onSearch(input);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar
                    handleChangeText={this.handleChangeText}
                    showOnLoad
                    hideBack
                />

                <Text>{JSON.stringify(this.props.photos)}</Text>
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