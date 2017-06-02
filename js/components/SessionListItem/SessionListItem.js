import React from 'react';
import { ListView, View, Text, Image, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';
import moment from 'moment';

import { goToSession } from '../../lib/navigationHelpers';

const SessionListItem = ({ currentNavigatorUID, rowData }) => {
  return (
    <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, rowData)}>
      <View>
        <Text>{rowData.title}</Text>
        <Text>{rowData.location}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default SessionListItem;
