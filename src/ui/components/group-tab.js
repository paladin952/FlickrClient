import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import React from 'react';
import {Card} from "native-base";
import Strings from "../../utils/strings";
import * as uiActions from "../../redux/actions/data";
import colors from "../../utils/colors";

class GroupTab extends React.Component {

    render() {
        if (this.props.loading) {
            return <ActivityIndicator size={'large'} style={{flex: 1, alignSelf: 'center'}}/>
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

        if (this.props.groups.length === 0) {
            return <View style={styles.errorContainer}>
                <Text>{Strings.t('empty_data')}</Text>
            </View>
        }

        return <View style={{flex: 1}}>
            <FlatList
                style={{flex: 1}}
                data={this.props.groups}
                renderItem={(item) => {
                    return (
                        <Card style={styles.cardContainer}
                        >
                            <TouchableOpacity
                                style={styles.touchContainer}
                                onPress={() => {
                                }}
                            >
                                <Text
                                    style={styles.title}
                                >
                                    {item.item.name}
                                </Text>

                                <Text
                                    style={styles.subtitle}
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
                                    style={styles.loadingContainer}
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

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.textGray
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.textGray
    },
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
        elevation: 1,
        minHeight: 75,
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
    }
});

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