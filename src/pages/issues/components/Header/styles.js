import { StyleSheet } from 'react-native';
import { colors, typography } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: colors.bright,
    alignItems: 'center',
  },

  button: {
    padding: 10,
  },

  titleBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: colors.darker,
    fontSize: typography.regular,
    fontWeight: 'bold',
  },
});

export default styles;
