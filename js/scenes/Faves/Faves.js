import React, { Component } from 'react';
import { Platform, Text, View, Image,ListView,  TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import SessionListItem from '../../components/SessionListItem';

const Faves = ({ rowData, faveIds, sessionData}) => {
  return (
    // console.log(dataSource )
      <ListView
        dataSource={rowData}
        renderRow={(data) => {
          return (
            <SessionListItem rowData={data} faveIds={faveIds} sessionData={sessionData} />
          )
        }}
      />
  );
};
// Schedule.propTypes = {

// };

export default Faves;

