import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Speaker from './Speaker';
import { connect } from 'react-redux';
import { _fetchSpeakers } from '../../redux/modules/speakers';
import { colors, typography } from '../../config/styles';

class SpeakerContainer extends Component{
  static propTypes = {
    speaker: PropTypes.object
  }
  static route = {
    navigationBar: {
      title: 'About the Speaker',
      titleStyle: {
        fontFamily: typography.fontMain,
      },
      tintColor: colors.white,
      backgroundColor: colors.black,

    },
  }
  render(){
    return (
      <Speaker speaker={this.props.speaker}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(SpeakerContainer);
