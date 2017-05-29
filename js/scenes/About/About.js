import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, ScrollView, Image } from 'react-native';

import { styles } from './styles';

const About = ({dataSource}) => {
  return (
    <ScrollView style={styles.container}>
    <Image source={require('../../assets/images/r10_logo.png')}/>
    <Text style={styles.codeOfConductsTitle}>Code of Conduct</Text>
      {dataSource.map((data, i) => {
        return (
          <View key={i}>
            <Text style={styles.conductTitle}>
                {data.title}
            </Text>
            <Text style={styles.singleConduct}>
                {data.description}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

About.propTypes = {

};
export default About;
