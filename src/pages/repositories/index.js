import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  Keyboard,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, typography } from 'styles';
import api from 'services/api';

import Repository from './components/Repository';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    repositories: [],
    search: '',
    loading: false,
    refreshing: false,
    searchError: false,
  }

  componentWillMount() {
    this.setState({ loading: true });

    this.loadRepositories().then(() => {
      this.setState({ loading: false });
    });
  }

  checkAndSaveRepository = async () => {
    const repository = await api.get(`/repos/${this.state.search}`);

    if (!repository.ok) throw Error();

    const savedRepositories = await AsyncStorage.getItem('@IssueNavigator:repositories')
      .then(response => (response ? JSON.parse(response) : []));

    const repoData = repository.data;
    const ownerKey = repoData.owner.type === 'User' ? 'owner' : 'organization';
    const storeRepo = {
      id: repoData.id,
      name: repoData.full_name,
      organization: repoData[ownerKey].login,
      avatar: repoData[ownerKey].avatar_url,
    };

    await AsyncStorage.setItem('@IssueNavigator:repositories', JSON.stringify([storeRepo, ...savedRepositories]));
  }

  addRepository = () => {
    Keyboard.dismiss();
    this.setState({ searchError: false });

    if (this.state.search.length === 0) return;

    this.checkAndSaveRepository(this.state.search)
      .then(() => { this.loadRepositories(); })
      .catch(() => { this.setState({ searchError: true }); });
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = await AsyncStorage.getItem('@IssueNavigator:repositories')
      .then(response => (response ? JSON.parse(response) : []));

    this.setState({ repositories, refreshing: false, searchError: false });
  }

  renderRepositories = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadRepositories}
        />
      }
      data={this.state.repositories}
      keyExtractor={repo => repo.id}
      renderItem={({ item }) => <Repository repository={item} />}
    />
  );

  renderList = () => (
    this.state.repositories.length ?
      this.renderRepositories() :
      <Text style={styles.empty}>Adicione repositórios</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <View style={styles.search}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.searchInput}
              placeholder="Adicionar repositório"
              underlineColorAndroid="transparent"
              onChangeText={(search) => { this.setState({ search }); }}
            />
            <TouchableOpacity style={styles.searchButton} onPress={this.addRepository}>
              <Icon name="plus" size={typography.regular} color={colors.darker} />
            </TouchableOpacity>
          </View>
          { this.state.searchError ?
            <Text style={styles.error}>Repositório não encontrado</Text> :
            null
          }
        </View>

        { this.state.loading ?
          <ActivityIndicator size="small" color={colors.shadow} style={styles.loading} /> :
          this.renderList()
        }
      </View>
    );
  }
}
