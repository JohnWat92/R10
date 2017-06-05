import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSpeaker } from '../../lib/navigationHelpers';

class Faves extends Component {
  constructor(){
    super();
    this.state={
      isFaved: false,
    }
  }
  faving = () => {
    this.setState({
      isFaved: !this.state.isFaved
    });
  }
  render() {
    console.log("this.props", this.props)
    return (
      <View style={styles.container}>
        <Text> THIS IS FAV</Text>
      </View>
    );
  }
}

export default Faves;
