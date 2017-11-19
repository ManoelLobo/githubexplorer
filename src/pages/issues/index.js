import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Issues extends Component {
  renderList = () => {}

  render() {
    const { repository } = this.props.navigation.state.params.repository;

    return (
      <View><Text>ISSUES {repository}</Text></View>
    );
  }
}
