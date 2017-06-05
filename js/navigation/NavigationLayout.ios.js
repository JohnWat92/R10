import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import Router from './router';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import { colors, typography } from '../config/styles';
// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
var styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
};
const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMain
    },
    // backgroundColor: colors.red,
    renderBackground: () => (
      <LinearGradient
        colors={[colors.purple, colors.red]}
        style={styles.linearGradient}
        start={{x: 1, y: 0}}
        end={{x: -1, y: 1.0}}
        locations={[0,.6]}
      />
    )
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
        initialTab='schedule'
        tabBarColor={colors.black}
      >
        <TabItem
          id='schedule'
          title='Schedule'
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
        >
          <StackNavigation
            id='schedule'
            navigatorUID="schedule"
            initialRoute={Router.getRoute('Schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id='Faves'
          title='Faves'
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
        >
          <StackNavigation
            id='Faves'
            navigatorUID="Faves"
            initialRoute={Router.getRoute('Faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id='About'
          title='About'
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-information-circle', isSelected)}
        >
          <StackNavigation
            id='about'
            initialRoute={Router.getRoute('About')}
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
