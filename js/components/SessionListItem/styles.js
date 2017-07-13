import { StyleSheet } from 'react-native';
import {colors, typography} from '../../config/styles';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingBottom: 8,
    flex:1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
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
    marginTop:8
  },
  secondRowText:{
    color: colors.mediumGrey,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
  },
});
