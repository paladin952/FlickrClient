import React from 'react';
import {FlatList, ImageBackground, Text, View, StyleSheet, Dimensions} from "react-native";
import {connect} from "react-redux";
import * as uiActions from "../../redux/actions/ui";
import SearchBar from 'react-native-searchbar';
import * as Constants from "../../utils/constants";

let deviceWidth = Dimensions.get('window').width

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
                    style={{flex: 1, flexDirection: 'row'}}
                    handleChangeText={this.handleChangeText}
                    showOnLoad
                    hideBack
                />

                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.props.photos}
                    renderItem={(item) => {
                        return <View style={{
                            flex: 1,
                            width: deviceWidth / 2 - 8,
                            margin: 4,
                            height: 304,
                            maxHeight: 304,
                            backgroundColor: '#CCC',
                        }}>
                            <ImageBackground
                                style={{width: '100%', height: '100%'}}
                                source={{uri: Constants.getPhotoUrl(item.item)}}
                            />

                            <Text>here->{item.item["id"]}</Text>
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

const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
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