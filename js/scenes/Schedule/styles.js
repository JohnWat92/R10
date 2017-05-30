import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex:1,
  },
  singleConductDescription: {
    flexDirection: 'column',
    marginLeft: 16,
    marginTop:8,
    marginBottom: 8,
    marginRight:16,
  },
  logo: {
    flex:1,
    marginTop:32,
    marginBottom: 16,
    alignItems:'center',
  },
  singleConductTitle: {
    flexDirection: 'column',
    marginLeft: 16,
    marginRight:16,
    marginTop:8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  headings: {
    fontSize:20,
    marginLeft: 16,
    marginTop:8,
    marginBottom:8,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
