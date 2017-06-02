/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import About from './scenes/About';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import Store from './redux/store';

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  NavigationStyles
} from '@expo/ex-navigation';

import Router from './navigation/router';

import NavigationLayout from './navigation/NavigationLayout';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

export default class R10 extends Component {
  render() {
    return (
        <Provider store={Store}>
          <NavigationProvider context={navigationContext}>
          <StatusBar barStyle='light-content' />
            <StackNavigation
              id='root'
              navigatorUID='root'
              initialRoute={Router.getRoute('Layout')}
              defaultRouterConfig={{
                styles: {...NavigationStyles.SlideVertical,},
               }}
            />
          </NavigationProvider>
        </Provider>
    );
  }
}
