import React from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';
import SessionListItem from '../../components/SessionListItem';

const Faves = ({ rowData, faveIds, sessionData}) => {
  return (
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
Faves.propTypes = {
  rowData: PropTypes.object,
  faveIds: PropTypes.array,
  sessionData: PropTypes.object,
};

export default Faves;

