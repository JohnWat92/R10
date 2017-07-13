import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, View, Image, ScrollView } from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import { styles } from './styles';
import { colors } from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';



export const aboutMoreButton = () => (
  <Hyperlink onPress={ url => alert(url) }>
    <Text style={ { fontSize: 15 } }>
      This text will be parsed to check for clickable strings like https://github.com/obipawan/hyperlink and made clickable.
    </Text>
  </Hyperlink>
)
class Speaker extends Component {
  render() {
    const speakerData = this.props.speaker;
    const pictureSize = 100;
    const aboutButton = () => {

    }
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.speakerBox}>
          <Image
            style={{width: pictureSize, height: pictureSize, borderRadius: pictureSize/2}}
            source={{uri:`${speakerData.image}`}} />
          <Text style={styles.speakerName}>{speakerData.name}</Text>
          <Text style={styles.speakerDescription}>{speakerData.bio}</Text>
          <LinearGradient
            colors={[colors.purple, colors.blue]}
            style={styles.aboutMoreButton}
            start={{x: 1, y: 0}}
            end={{x: -1, y: 1.0}}
            locations={[0,.6]}
          >
          <Text style={styles.aboutMoreText}>Read More on Wikipedia</Text>
          </LinearGradient>
        </View>
      </ScrollView>

      </View>
    );
  }
}
Speaker.propTypes = {
  speaker: PropTypes.object,
}

export default Speaker;

