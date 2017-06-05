import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  singleConductDescription: {
    flexDirection: 'column',
    marginTop:8,
    marginBottom: 8,
  },
  singleConductTitle: {
    flexDirection: 'column',
    color: colors.purple,
    marginTop:8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
});
