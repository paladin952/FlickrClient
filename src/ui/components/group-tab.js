import {FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';
import {Card, Container, Content, Header} from "native-base";
import Strings from "../../utils/strings";

class GroupTab extends React.Component {

    render() {
        return <View style={{flex: 1}}>
            {/*<Text>{JSON.stringify(this.props.groups)}</Text>*/}
            <FlatList
                style={{flex: 1}}
                data={this.props.groups}
                renderItem={(item) => {
                    return (
                        <Card style={{
                            elevation: 1,
                            minHeight: 75,
                            paddingLeft: 16,
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingRight: 16,
                        }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        color: '#333333'
                                    }}
                                >
                                    {item.item.name}
                                </Text>

                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#333333'
                                    }}
                                >
                                    {item.item.members} {item.item.members > 1 ? Strings.t('members') : Strings.t('member')}
                                </Text>
                            </TouchableOpacity>
                        </Card>
                    )
                }}
                keyExtractor={(item, index) => {
                    return item.nsid;
                }}
            />
        </View>
    }
}


const mapStateToProps = state => {
    return {
        groups: state.photos.groups
    }
};
const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupTab);