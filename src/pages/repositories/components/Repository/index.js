import React, { Component } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { colors, typography } from 'styles';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  navigateToIssues = (repository) => {
    const { dispatch } = this.props.navigation;

    const navigateAction = NavigationActions.navigate({
      routeName: 'Issues',
      params: { repository },
    });

    dispatch(navigateAction);
  }

  render() {
    const { repository } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => { this.navigateToIssues(repository.name); }}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={{ uri: `${repository.avatar}` }}
          />
          <View style={styles.repository}>
            <Text style={styles.repositoryName}>{repository.name}</Text>
            <Text style={styles.organization}>{repository.organization}</Text>
          </View>
          <Icon name="chevron-right" size={typography.regular} color={colors.darker} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
