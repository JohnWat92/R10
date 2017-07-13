import React from 'react';
import PropTypes from 'prop-types';

import { ListView } from 'react-native';
import SessionListItem from '../../components/SessionListItem';

const Schedule = ({ dataSource, faveIds, sessionData}) => {
  return (
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
  dataSource: PropTypes.object,
  faveIds: PropTypes.array,
  sessionData: PropTypes.object,
};

export default Schedule;
