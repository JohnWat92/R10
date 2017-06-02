import React, { Component } from 'react';
import { ListView, View, Text, LayoutAnimation, Animated, Easing} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './styles';

class ConductItem extends Component {
  constructor(){
    super();
    this.state={
      expanded: false,
      spinValue: new Animated.Value(0),
    }
  }
  onChange = () => {
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start()
    this.setState({expanded: !this.state.expanded})
  }
  toggleConduct = () => {
    if(this.state.expanded){
      LayoutAnimation.easeInEaseOut();
      return <Text style={styles.singleConductDescription}>{this.props.singleConduct.description}</Text>
    }
  }
  render() {
   let spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    let animatedStyles = {
      expandSymbol: {
        transform: [{rotate: spin}]
      }
    }
    return (
      <View>
        <Text style={styles.singleConductTitle} >
          {(this.state.expanded) ?
            <Animated.Text onPress={this.onChange} style={animatedStyles.expandSymbol}>- </Animated.Text>
            :
            <Animated.Text onPress={this.onChange} style={animatedStyles.expandSymbol}>+ </Animated.Text>
          }{this.props.singleConduct.title}
        </Text>
        {this.toggleConduct()}
      </View>
    );
  }
}

export default ConductItem;
