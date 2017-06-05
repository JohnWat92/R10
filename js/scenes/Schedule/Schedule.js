import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, ListView, Image } from 'react-native';
import { formatSessionData } from '../../lib/dataFormatHelper';
import { styles } from './styles';
import SessionListItem from '../../components/SessionListItem';

const Schedule = ({ dataSource }) => {
  return (
      <ListView
        dataSource={dataSource}
        renderRow={(data) => {
          return (
            <SessionListItem rowData={data} currentNavigatorUID="schedule" />
          )
        }}
      />
  );
};
Schedule.propTypes = {

};

export default Schedule;
