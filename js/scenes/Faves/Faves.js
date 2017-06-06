import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

// import { goToSpeaker } from '../../lib/navigationHelpers';

class Faves extends Component {
  render() {
    // let favArray = this.props.faveIds.includes()
    console.log("this.props", this.props)
    // const favArray = this.props.session.sessionData.rowIds.filter((id) => {
    //   return id === this.props.faveIds
    // })
    return (
      <View style={styles.container}>
        <Text> THIS IS FAV</Text>
      </View>
    );
  }
}

export default Faves;
