import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { _fetchConduct } from '../../redux/modules/conduct';
import About from './About';

import { ActivityIndicator } from 'react-native';

class AboutContainer extends Component{
  static propTypes = {

  }
  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  constructor(){
    super();
    this.state = {
      dataSource: [],
      isLoading: true
    };
  }
  componentDidMount(){
   this.props.dispatch(_fetchConduct());
  }
  componentDidUpdate(){
    if ( this.state.dataSource && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }
  render(){
    if (this.state.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
    return (
      <About
        dataSource={this.props.dataSource.conductData}
       />
    );
    }
  }
}
const mapStateToProps = (state) => ({ dataSource: state.conduct });
export default connect(mapStateToProps)(AboutContainer);
