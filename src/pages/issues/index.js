import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Header from './components/Header';
import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          repository: PropTypes.shape(),
        }),
      }),
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  renderList = () => {}

  render() {
    const { name } = this.props.navigation.state.params.repository;
    return (
      <View style={styles.container}>
        <Header name={name} navigation={this.props.navigation} />
        <View style={styles.filter}>
          <TouchableOpacity>
            <Text>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Fechadas</Text>
          </TouchableOpacity>
        </View>
        <Text>ISSUES {name}</Text>
      </View>
    );
  }
}
