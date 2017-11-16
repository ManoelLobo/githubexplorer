import { StyleSheet } from 'react-native';
import { colors, typography } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bright,
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  repository: {
    flex: 1,
    marginHorizontal: 10,
  },

  repositoryName: {
    color: colors.darker,
    fontSize: typography.regular,
    fontWeight: 'bold',
  },

  organization: {
    color: colors.shadow,
    fontSize: typography.small,
  },
});

export default styles;
