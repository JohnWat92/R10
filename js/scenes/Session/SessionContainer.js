import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Session from './Session';
import { connect } from 'react-redux';
import { ActivityIndicator, ListView, View, Text, Image } from 'react-native';
import { _fetchSpeakers } from '../../redux/modules/speakers';

class SessionContainer extends Component{
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  componentDidMount(){
    this.props.fetchSpeakers(this.props.sessionData.speaker);
  }
  render(){
    return (
      <Session sessionData={this.props.sessionData} speakerData={this.props.speaker} />
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
    speaker: state.speaker.speakerInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
