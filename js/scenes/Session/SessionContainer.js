import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Session from './Session';
import { connect } from 'react-redux';
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
      <Session sessionData={this.props.sessionData} speakerData={this.props.speaker} faveIds={this.props.faveIds} />
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
    session: state.session,
    faveIds: state.faves.faveIds
  }
}
SessionContainer.propTypes = {
  sessionData: PropTypes.object,
  speaker: PropTypes.object,
  faveIds: PropTypes.array,
  fetchSpeakers: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
