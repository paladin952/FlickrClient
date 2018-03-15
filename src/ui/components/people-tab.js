import {FlatList, ImageBackground, Text, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';

class PeopleTab extends React.Component {

    render() {
        return <View style={{flex: 1}}>
            <Text>{JSON.stringify(this.props.people)}</Text>
            {/*<FlatList*/}
                {/*style={{flex: 1}}*/}
                {/*data={this.props.people}*/}
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
    }
}


const mapStateToProps = state => {
    return {
        people: state.photos.people
    }
};
const mapDispatchToProps = dispatch => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PeopleTab);