import { StyleSheet } from 'react-native';
import { colors, typography } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bright,
    margin: 10,
    padding: 20,
    borderRadius: 5,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },

  issue: {
    flex: 1,
    marginHorizontal: 10,
  },

  issueDescription: {
    fontSize: typography.regular,
    fontWeight: 'bold',
    color: colors.darker,
  },

  issueAuthor: {
    fontSize: typography.small,
    color: colors.shadow,
  },
});

export default styles;
