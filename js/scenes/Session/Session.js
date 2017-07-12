import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSpeaker } from '../../lib/navigationHelpers';
import LinearGradient from 'react-native-linear-gradient';

import { colors, typography } from '../../config/styles';
import { createFave, deleteFave, queryFaves } from '../../config/models';

class Session extends Component {
  render() {
    console.log(this.props)
    const pictureSize = 50;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.locationHeart}>
          <Text style={styles.locationText}>{this.props.sessionData.location}</Text>
          {
            this.props.faveIds.includes(this.props.sessionData.session_id) ?
              <Icon name={Platform.OS === "ios" ? 'ios-heart' : 'md-heart'} size={20} color="#cf392a"/> :
              <Icon name={Platform.OS === "ios" ? 'ios-heart-outline' : 'md-heart-outline'}  size={20}/>
          }
        </View>
        <Text style={styles.titleText}>{this.props.sessionData.title}</Text>
        <Text style={styles.sessionTime}>{moment.unix(this.props.sessionData.start_time).format('LT')}</Text>
        <Text style={styles.sessionDescription}>{this.props.sessionData.description}</Text>
        {this.props.speakerData.image ?
        <View>
        <Text style={styles.locationText}>Presented by:</Text>
          <TouchableOpacity style={styles.pictureAndName} onPress={() => goToSpeaker(this.props.speakerData)} renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}>
            <Image
              style={{width: pictureSize, height: pictureSize, borderRadius: pictureSize/2}}
              source={{uri:`${this.props.speakerData.image}`}}
            />
            <Text style={styles.pictureText}>{this.props.speakerData.name}</Text>
          </TouchableOpacity>
        </View>
        :
        <Text></Text>}
        {!this.props.faveIds.includes(this.props.sessionData.session_id) ?
          <TouchableOpacity onPress={() => createFave(this.props.sessionData.session_id)} style={styles.removeFromFavesTop} >
            <LinearGradient
              colors={[colors.purple, colors.blue]}
              style={styles.removeFavesButton}
              start={{x: 1, y: 0}}
              end={{x: -1, y: 1.0}}
              locations={[0,.6]}
            >
              <Text style={styles.removeFavesText}>Add to Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => deleteFave(this.props.sessionData.session_id)} style={styles.removeFromFavesTop} >
            <LinearGradient
              colors={[colors.purple, colors.blue]}
              style={styles.removeFavesButton}
              start={{x: 1, y: 0}}
              end={{x: -1, y: 1.0}}
              locations={[0,.6]}
            >
              <Text style={styles.removeFavesText}>Remove from Faves</Text>
            </LinearGradient>
          </TouchableOpacity>}
      </ScrollView>
    );
  }
}

Session.propTypes = {
  sessionData: PropTypes.object,
  speakerData: PropTypes.object,
  faveIds: PropTypes.array,
}

export default Session;
