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
    this.props.fetchSessions();
    this.props.fetchFaves();
    realm.addListener('change', () => {
      this.props.fetchSessions();
      this.props.fetchFaves();
    });
  }
  render(){
    console.log(this.props)
    return (
      <Faves session={this.props.session} faveIds={this.props.faveIds}/>
    )
  }
}

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
    session: state.session.sessionData,
    faveIds: state.faves
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);
