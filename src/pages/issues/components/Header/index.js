import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { colors, typography } from 'styles';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }

  navigateBack = () => {
    const { dispatch } = this.props.navigation;

    const navigateBackAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Repositories' }),
      ],
    });

    dispatch(navigateBackAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.navigateBack} style={styles.button}>
          <Icon name="chevron-left" size={typography.big} color={colors.darker} />
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
