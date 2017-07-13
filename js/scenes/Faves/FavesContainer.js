import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, ListView, View, Text, Image } from 'react-native';
import { _fetchSessions } from '../../redux/modules/sessions';
import { _fetchFaves } from '../../redux/modules/faves';
import Faves from './Faves';
import realm from '../../config/models';


class FavesContainer extends Component{
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }
  componentDidMount(){
    this.props.fetchFaves();
    this.props.fetchSessions();
    realm.addListener('change', () => {
      this.props.fetchSessions();
      this.props.fetchFaves();
    });
  }
  render(){
    if(this.props.isLoading){
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    }else{
      return (
        <Faves rowData={this.props.favedSessions} faveIds={this.props.faveIds}/>
      )
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
    favedSessions: ds.cloneWithRowsAndSections(
      state.faves.favedSessions.dataBlob,
      state.faves.favedSessions.sectionIds,
      state.faves.favedSessions.rowIds
    ),
    faveIds: state.faves.faveIds,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);
