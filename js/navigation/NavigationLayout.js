import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import Router from './router';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../config/styles';
// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMain
    },
    backgroundColor: colors.red,
    // renderBackground: () => (

    // )
  }
};
class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }
  render(){
    return (
      <TabNavigation
        initialTab='About'
        tabBarColor={colors.black}
      >
        <TabItem
          id='About'
          title='About'
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-information-circle-outline', isSelected)}
        >
          <StackNavigation
            id='about'
            initialRoute={Router.getRoute('About')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id='schedule'
          title='Schedule'
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-calendar-outline', isSelected)}
        >
          <StackNavigation
            id='schedule'
            initialRoute={Router.getRoute('Schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }
  renderIcon(iconName, isSelected){
    return <Icon name={iconName} size={24} color={isSelected ? colors.white : colors.mediumGrey}/>
  }
  renderTitle(isSelected, title){
    const titleStyle = {
      color: isSelected ? colors.white : colors.mediumGrey,
      fontSize: 12,
      fontFamily: typography.fontMain
    };
    return <Text style={titleStyle}>{title}</Text>
  }
}

export default NavigationLayout;
