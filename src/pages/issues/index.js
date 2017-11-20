import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';
import { colors } from 'styles';
import Header from './components/Header';
import Issue from './components/Issue';
import Filter from './components/Filter';
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
    status: 'all',
  }

  componentWillMount() {
    this.setState({ loading: true });

    this.loadIssues()
      .then(() => { this.setState({ loading: false }); });
  }

  loadIssues = async () => {
    await api.get(`/repos/${this.props.navigation.state.params.repository.fullName}/issues?state=${this.state.status}`)
      .then((response) => { this.setState({ issues: response.data }); });
  }

  filterIssues = async (status) => {
    await this.setState({ status, loading: true });

    this.loadIssues()
      .then(() => { this.setState({ loading: false }); });
  }

  renderIssues = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadIssues}
        />
      }
      data={this.state.issues}
      keyExtractor={issue => issue.id}
      renderItem={({ item }) => <Issue issue={item} />}
    />
  )

  renderList = () => (
    this.state.issues.length ?
      this.renderIssues() :
      <Text style={styles.empty}>Não existem issues neste repositório</Text>
  )

  render() {
    const { name } = this.props.navigation.state.params.repository;
    const filters = [
      { status: 'all', title: 'Todas' },
      { status: 'open', title: 'Abertas' },
      { status: 'closed', title: 'Fechadas' },
    ];

    return (
      <View style={styles.container}>
        <Header name={name} navigation={this.props.navigation} />
        <View style={styles.filter}>
          { filters.map(f => (
            <Filter
              key={f.status}
              title={f.title}
              style={f.status === this.state.status ? 'active' : 'inactive'}
              onPress={() => { this.filterIssues(f.status); }}
            />
            ))}
        </View>
        { this.state.loading ?
          <ActivityIndicator size="small" color={colors.shadow} style={styles.loading} /> :
          this.renderList()
        }
      </View>
    );
  }
}
