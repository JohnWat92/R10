import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { _fetchSessions } from '../../redux/modules/sessions';
import { _fetchFaves } from '../../redux/modules/faves';
import Schedule from './Schedule';

import { ActivityIndicator, ListView } from 'react-native';
import realm from '../../config/models';

class ScheduleContainer extends Component{
  static propTypes = {
    fetchSessions: PropTypes.func,
    fetchFaves: PropTypes.func,
    isLoading: PropTypes.bool,
    dataSource: PropTypes.object,
    faveIds: PropTypes.array,
    session: PropTypes.object,
  }
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  componentDidMount(){
    this.props.fetchSessions();
    this.props.fetchFaves();
    realm.addListener('change', () => {
      this.props.fetchSessions();
      this.props.fetchFaves();
    });
  }
  render(){
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
    return (
      <Schedule
        dataSource={this.props.dataSource} faveIds={this.props.faveIds} sessionData={this.props.session}
       />
    );
    }
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

function mapDispatchToProps(dispatch){
  return {
    fetchSessions(){
      dispatch(_fetchSessions())
    },
    fetchFaves(){
      dispatch(_fetchFaves())
    }
  }
}

function mapStateToProps(state){
  return {
    dataSource: ds.cloneWithRowsAndSections(
      state.session.sessionData.dataBlob,
      state.session.sessionData.sectionIds,
      state.session.sessionData.rowIds
    ),
    isLoading: state.session.isLoading,
    faveIds: state.faves.faveIds,
    session: state.session
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
