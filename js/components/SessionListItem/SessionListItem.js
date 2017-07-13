import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { goToSession } from '../../lib/navigationHelpers';
import { styles } from './styles';

class SessionListItem extends Component {
  render() {
  console.log('sessionListItem', this.props)
    return (
      <TouchableOpacity onPress={() => goToSession(this.props.currentNavigatorUID, this.props.rowData)}>
        <View style={styles.container}>
          <View >
            <Text style={styles.firstRow}>{this.props.rowData.title}</Text>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.secondRowText}>{this.props.rowData.location}</Text>
            {
              this.props.faveIds.includes(this.props.rowData.session_id) ?
              <Icon name={Platform.OS === "ios" ? 'ios-heart' : 'md-heart'} size={20} color="#cf392a"/>
              :
              <Icon name={Platform.OS === "ios" ? 'ios-heart-outline' : 'md-heart-outline'} size={20}/>
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
SessionListItem.propTypes = {
  currentNavigatorUID: PropTypes.string,
  rowData: PropTypes.object,
  faveIds: PropTypes.array,
}

export default SessionListItem;
