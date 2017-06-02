import React from 'react';
import { Platform, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSpeaker } from '../../lib/navigationHelpers';

const Session = ({ sessionData, speakerData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationHeart}>
        <Text>{sessionData.location}</Text>
        <Icon name={Platform.OS === "ios" ? 'ios-heart' : 'md-heart'} size={24}/>
      </View>
      <Text>{sessionData.title}</Text>
      <Text>{moment.unix(sessionData.start_time).format('LT')}</Text>
      <Text>{sessionData.description}</Text>
      <Text>Presented by:</Text>
      <TouchableOpacity style={styles.pictureAndName} onPress={() => goToSpeaker(speakerData)}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={{uri:`${speakerData.image}`}}
        />
        <Text>{speakerData.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
