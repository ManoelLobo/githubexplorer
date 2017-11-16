import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, typography } from 'styles';
import Repository from './components/Repository';

import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Adicionar repositório"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="plus" size={typography.regular} color={colors.darker} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
        </ScrollView>
      </View>
    );
  }
}
