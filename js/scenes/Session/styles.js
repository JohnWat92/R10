import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  locationHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pictureAndName: {
    flexDirection:'row',
    alignItems: 'center'
  },
  locationText: {
    color: colors.mediumGrey,
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    marginBottom: 12
  },
  titleText:{
    fontSize:24,
    fontFamily: typography.fontMain,
    marginBottom: 12
  },
  sessionTime: {
    color: colors.red,
    marginBottom: 12,
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
    fontSize: typography.baseSize
  },
  sessionDescription: {
    fontFamily: typography.fontMainLight,
    marginBottom: 16,
    fontSize:typography.baseSize
  },
  pictureText:{
    fontFamily: typography.fontMain,
    marginLeft: typography.baseSize,
    fontSize: typography.baseSize
  },
  removeFavesText: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color:'white',
    fontFamily: typography.fontMainlight
  },
  removeFavesButton: {
    fontFamily: typography.fontMainlight,
    borderRadius: 20,
    // backgroundColor: 'grey',
    padding: 8,
    marginTop:16,
    // width: 'auto',
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  removeFromFavesTop:{
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
    marginTop:16
  }

});
