import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';
import Header from './components/Header';
import Issue from './components/Issue';
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

  state = {
    issues: [],
    loading: false,
    refreshing: false,
  }

  componentWillMount() {
    this.setState({ loading: true });

    this.loadIssues(this.props.navigation.state.params.repository.fullName)
      .then(() => { this.setState({ loading: true }); });
  }

  loadIssues = async (repository) => {
    await api.get(`/repos/${repository}/issues`)
      .then((issues) => { this.setState({ issues }); });
  }

  renderList = () => {

  }

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
        <ScrollView>
          <Issue />
          <Issue />
          <Issue />
          <Issue />
          <Issue />
          <Issue />
        </ScrollView>
      </View>
    );
  }
}
