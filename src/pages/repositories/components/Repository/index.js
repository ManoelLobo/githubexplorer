import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, typography } from 'styles';

import styles from './styles';


const Repository = () => (
  <TouchableWithoutFeedback onPress={() => {}}>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png' }}
      />
      <View style={styles.repository}>
        <Text style={styles.repositoryName}>REPO</Text>
        <Text style={styles.organization}>Org</Text>
      </View>
      <Icon name="chevron-right" size={typography.regular} color={colors.darker} />
    </View>
  </TouchableWithoutFeedback>
);

export default Repository;
