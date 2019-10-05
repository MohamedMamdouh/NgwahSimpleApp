import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1
  },
  innerContainer: {
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
