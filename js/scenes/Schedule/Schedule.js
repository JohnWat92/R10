import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, ScrollView, Image } from 'react-native';

import { styles } from './styles';

const Schedule = ({dataSource}) => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.logo}>
      <Image
        source={require('../../assets/images/r10_logo.png')}
      />
    </View>
    <Text
      style={styles.singleConductDescription}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}>R10 is a conference that focuses on just about any topic related to dev.
    </Text>
    <Text style={styles.headings}>Date & Venue</Text>
    <Text style={styles.singleConductDescription}>The R10 conference will take place on Tuesday, June 27, 2017</Text>
    <Text style={styles.headings}>Code of Conduct</Text>
      {dataSource.map((data, i) => {
        return (
          <View key={i}>
            <Text style={styles.singleConductTitle}>
                - {data.title}
            </Text>
            <Text style={styles.singleConductDescription}>
                {data.description}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

Schedule.propTypes = {

};
export default Schedule;
