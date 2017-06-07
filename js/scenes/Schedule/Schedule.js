import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, ListView, Image } from 'react-native';
import { formatSessionData } from '../../lib/dataFormatHelper';
import { styles } from './styles';
import SessionListItem from '../../components/SessionListItem';

const Schedule = ({ dataSource, faveIds, sessionData}) => {
  return (
    // console.log(dataSource )
      <ListView
        dataSource={dataSource}
        renderRow={(data) => {
          return (
            <SessionListItem rowData={data} currentNavigatorUID="schedule" faveIds={faveIds} sessionData={sessionData} />
          )
        }}
      />
  );
};
Schedule.propTypes = {

};

export default Schedule;
