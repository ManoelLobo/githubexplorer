import { StyleSheet } from 'react-native';
import { colors, typography } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default styles;