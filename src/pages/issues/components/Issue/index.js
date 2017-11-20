import React from 'react';
import {
  Image,
  Linking,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, typography } from 'styles';
import styles from './styles';

const Issue = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('https://www.google.com'); }}>
    <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/590904?v=4' }} />
    <View style={styles.issue}>
      <Text numberOfLines={1} style={styles.issueDescription}>
        Longa descrição para poder truncar ao fim da linha
      </Text>
      <Text style={styles.issueAuthor}>User</Text>
    </View>
    <Icon name="chevron-right" size={typography.big} color={colors.light} />
  </TouchableOpacity>
);

export default Issue;
