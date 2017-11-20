import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Filter = ({ onPress, title, style }) => (
  <TouchableOpacity onPress={onPress}><Text style={styles[style]}>{title}</Text></TouchableOpacity>
);

Filter.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Filter;
