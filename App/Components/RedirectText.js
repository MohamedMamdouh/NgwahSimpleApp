import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/RedirectTextStyle';

const RedirectText = ({ title }) => (
  <TouchableOpacity style={styles.container}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default RedirectText;

// // Prop type warnings
RedirectText.propTypes = {
  title: PropTypes.string.isRequired
};
//
// // Defaults for props
RedirectText.defaultProps = {};
