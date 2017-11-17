import { StyleSheet } from 'react-native';
import { colors, typography } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  searchBar: {
    backgroundColor: colors.bright,
    marginBottom: 10,
  },

  search: {
    flexDirection: 'row',
    backgroundColor: colors.bright,
    padding: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    backgroundColor: colors.lighter,
    fontSize: typography.small,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'stretch',
  },

  searchButton: {
    marginLeft: 10,
  },

  error: {
    backgroundColor: colors.bright,
    paddingLeft: 20,
    paddingBottom: 10,
  },
});

export default styles;
