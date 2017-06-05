import { StyleSheet } from 'react-native';
import {colors, typography} from '../../config/styles';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
    paddingRight: 16,
    flex:1,
  },
  firstRow: {
    fontSize: 16,
    fontWeight:'bold',
    fontFamily: typography.fontMain,
    marginTop:8
  },
  secondRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    fontFamily: typography.fontMain,
    marginTop:8
  },
  secondRowText:{
    color: colors.mediumGrey,
  }
});
