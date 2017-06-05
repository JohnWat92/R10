import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSpeaker } from '../../lib/navigationHelpers';

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
    return (
      <View style={styles.container}>
        <View style={styles.locationHeart}>
          <Text>{this.props.sessionData.location}</Text>
          {(this.state.isFaved) ? <Icon name={Platform.OS === "ios" ? 'ios-heart' : 'md-heart'} onPress={this.faving} size={20} color="#cf392a"/> : <Icon name={Platform.OS === "ios" ? 'ios-heart-outline' : 'md-heart-outline'}  onPress={this.faving} size={20}/>}
        </View>
        <Text>{this.props.sessionData.title}</Text>
        <Text>{moment.unix(this.props.sessionData.start_time).format('LT')}</Text>
        <Text>{this.props.sessionData.description}</Text>
        <Text>Presented by:</Text>
        <TouchableOpacity style={styles.pictureAndName} onPress={() => goToSpeaker(this.props.speakerData)}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={{uri:`${this.props.speakerData.image}`}}
          />
          <Text>{this.props.speakerData.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Session;
