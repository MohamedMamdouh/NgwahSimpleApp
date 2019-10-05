import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/RedirectTextStyle';

const RedirectText = ({ title, navigation }) => (
  <TouchableOpacity style={styles.container} onPress={navigation}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default RedirectText;

// // Prop type warnings
RedirectText.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.func.isRequired
};
//
// // Defaults for props
RedirectText.defaultProps = {};
