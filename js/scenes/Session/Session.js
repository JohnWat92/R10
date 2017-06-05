import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSpeaker } from '../../lib/navigationHelpers';
import LinearGradient from 'react-native-linear-gradient';

import { colors, typography } from '../../config/styles';

class Session extends Component {
  constructor(){
    super();
    this.state={
      isFaved: false,
    }
  }
  faving = () => {
    this.setState({
      isFaved: !this.state.isFaved
    });
  }
  render() {
    console.log("this.props", this.props)
    const pictureSize = 50;
    return (
      <View style={styles.container}>
        <View style={styles.locationHeart}>
          <Text style={styles.locationText}>{this.props.sessionData.location}</Text>
          {(this.state.isFaved) ? <Icon name={Platform.OS === "ios" ? 'ios-heart' : 'md-heart'} onPress={this.faving} size={20} color="#cf392a"/> : <Icon name={Platform.OS === "ios" ? 'ios-heart-outline' : 'md-heart-outline'}  onPress={this.faving} size={20}/>}
        </View>
        <Text style={styles.titleText}>{this.props.sessionData.title}</Text>
        <Text style={styles.sessionTime}>{moment.unix(this.props.sessionData.start_time).format('LT')}</Text>
        <Text style={styles.sessionDescription}>{this.props.sessionData.description}</Text>
        <Text style={styles.locationText}>Presented by:</Text>
        <TouchableOpacity style={styles.pictureAndName} onPress={() => goToSpeaker(this.props.speakerData)} renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}>
          <Image
            style={{width: pictureSize, height: pictureSize, borderRadius: pictureSize/2}}
            source={{uri:`${this.props.speakerData.image}`}}
          />
          <Text style={styles.pictureText}>{this.props.speakerData.name}</Text>
        </TouchableOpacity>

        {!this.state.isFaved ?
          <Text></Text>:
          <TouchableOpacity onPress={this.faving} style={styles.removeFromFavesTop} >
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

      </View>
    );
  }
}

export default Session;
