import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
    paddingRight: 16,
    flex:1,
  },
  singleConductDescription: {
    flexDirection: 'column',
    marginTop:8,
    marginBottom: 8,
  },
  logo: {
    flex:1,
    marginTop:24,
    marginBottom: 16,
    alignItems:'center',
    paddingBottom: 25,
    borderColor: '#E8E8E8',
    borderBottomWidth: 1.5
  },
  singleConductTitle: {
    flexDirection: 'column',
    marginTop:8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  headings: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:8,
    marginBottom:8,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
