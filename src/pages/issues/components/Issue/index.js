import React from 'react';
import {
  Image,
  Linking,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { colors, typography } from 'styles';
import styles from './styles';

const Issue = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL(issue.html_url); }}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.issue}>
      <Text numberOfLines={1} style={styles.issueDescription}>
        {issue.title}
      </Text>
      <Text style={styles.issueAuthor}>{issue.user.login}</Text>
    </View>
    <Icon name="chevron-right" size={typography.big} color={colors.light} />
  </TouchableOpacity>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.url,
    }),
  }).isRequired,
};

export default Issue;
