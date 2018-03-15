import {ActivityIndicator, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import * as Constants from "../../utils/constants";
import {connect} from "react-redux";
import React from 'react';
import {Card, Container, Content, Header} from "native-base";
import Strings from "../../utils/strings";
import * as uiActions from "../../redux/actions/data";

class GroupTab extends React.Component {

    render() {
        if (this.props.loading) {
            return <ActivityIndicator size={'large'} style={{flex: 1, alignSelf: 'center'}}/>
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

        if (this.props.groups.length === 0) {
            return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{Strings.t('empty_data')}</Text>
            </View>
        }

        return <View style={{flex: 1}}>
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
                ListFooterComponent={() => {
                    return (
                        this.props.isLoadingMore
                            ? <View key={'indicator'}
                                    style={{flex: 1, padding: 10}}
                            >
                                <ActivityIndicator size="small"/>
                            </View>
                            : null
                    );
                }}
                onEndReached={() => {
                    this.props.loadMore();
                    console.log('luci', "ON END REACHED GROUP");
                }}
            />
        </View>
    }
}


const mapStateToProps = state => {
    return {
        loading: state.ui.loading,
        groups: state.group.groups,
        isLoadingMore: state.ui.isLoadingMore,
        networkError: state.ui.networkError,
        genericError: state.ui.genericError
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadMore: () => dispatch(uiActions.loadMoreGroups())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupTab);