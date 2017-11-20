import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  filter: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },

  empty: {
    paddingLeft: 20,
  },
});

export default styles;
