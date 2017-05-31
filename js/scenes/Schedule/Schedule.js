import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, ListView } from 'react-native';
import { formatSessionData } from '../../lib/dataFormatHelper';
import { styles } from './styles';

const Schedule = ({dataSource}) => {
  console.log('THIS IS THE DATASOURCE', dataSource)
  return (
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={(data) => (
          <View>
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
          </View>
        )}
      />
    </View>
  );
};
Schedule.propTypes = {

};
export default Schedule;
