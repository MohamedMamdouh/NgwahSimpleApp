import React from 'react';
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/SubmitButtonStyle';

const SubmitButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

// // Prop type warnings
// static propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// static defaultProps = {
//   someSetting: false
// }
