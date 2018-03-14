/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MainPage from "./src/ui/pages/main-page";
import {StackNavigator} from "react-navigation";
import {Provider} from "react-redux";
import store from "./src/redux/store";


console.disableYellowBox = true;

const StackNav = StackNavigator({
    MainPage: {
        screen: MainPage
    },
});


const App = () => (
    <Provider store={store}>
        <StackNav/>
    </Provider>
);

export default App;