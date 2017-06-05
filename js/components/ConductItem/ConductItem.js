import React, { Component } from 'react';
import { ListView, View, Text, LayoutAnimation, Animated, Easing,TouchableOpacity} from 'react-native';

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
    this.setState({expanded: !this.state.expanded});
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 4000,
      }
    ).start()
  }
  toggleConduct = () => {
    if(this.state.expanded){
      LayoutAnimation.easeInEaseOut();
      return <Text style={styles.singleConductDescription}>{this.props.singleConduct.description}</Text>
    }
  }
  expansionSwitch = () => {}
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
      <TouchableOpacity >
        <Text onPress={this.onChange} style={styles.singleConductTitle} >
          {(this.state.expanded) ?
            <Animated.Text style={animatedStyles.expandSymbol}>- </Animated.Text>
            :
            <Animated.Text style={animatedStyles.expandSymbol}>+ </Animated.Text>
          }{this.props.singleConduct.title}
        </Text>
        {this.toggleConduct()}
      </TouchableOpacity>
    );
  }
}

export default ConductItem;
