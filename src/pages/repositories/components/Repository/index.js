import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, typography } from 'styles';

import styles from './styles';

const Repository = ({ repository }) => (
  <TouchableWithoutFeedback onPress={() => {}}>
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

Repository.propTypes = {
  repository: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repository;
