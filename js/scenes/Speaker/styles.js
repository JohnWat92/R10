import React from 'react';
import { StyleSheet } from 'react-native';
import { typography, colors } from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 16
  },
  speakerBox: {
    backgroundColor:'white',
    // flex: 1,
    alignItems:'center',
    borderRadius: 10,
    padding: 16
  },
  speakerName: {
    fontSize: 24,
    margin: typography.baseSize
  },
  speakerDescription: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize
  },
  aboutMoreButton: {
    borderRadius: 20,
    // backgroundColor: 'grey',
    padding: 8,
    margin: 16,
    width: 'auto',
    alignItems: 'center',
  },
  aboutMoreText: {
    backgroundColor: 'transparent',
    fontSize: 16,
    paddingLeft:12,
    paddingRight:12,
    color:'white',
    fontFamily: typography.fontMainlight
  }

});
