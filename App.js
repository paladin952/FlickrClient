/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import MainPage from "./src/ui/pages/main-page";
import {StackNavigator} from "react-navigation";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import PhotoDetailsPage from "./src/ui/pages/photo-details-page";
import NavigatorService from "./src/utils/navigation-service";


console.disableYellowBox = true;

const StackNav = StackNavigator({
    MainPage: {
        screen: MainPage,
        navigationOptions: {
            header: null
        }
    },
    PhotoDetailsPage: {
        screen: PhotoDetailsPage
    }
});


const App = () => (
    <Provider store={store}>
        <StackNav
            ref={navigatorRef => {
                NavigatorService.setContainer(navigatorRef);
            }}/>
    </Provider>
);

export default App;