import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Faves from './Faves';
import { connect } from 'react-redux';
import { ActivityIndicator, ListView, View, Text, Image } from 'react-native';
import { _fetchSpeakers } from '../../redux/modules/speakers';

class FavesContainer extends Component{
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }
  componentDidMount(){
  }
  render(){
    return (
      <Faves />
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchSpeakers(speakerId){
      dispatch(_fetchSpeakers(speakerId))
    }
  }
}

function mapStateToProps(state){
  return {
    speaker: state.speaker.speakerInfo,
    session: state.session
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);
