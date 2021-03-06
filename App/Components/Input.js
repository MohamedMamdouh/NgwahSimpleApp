import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './Styles/InputStyle';

const Input = ({ placeholder, secureTextEntry, type }) => {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={txt => setInput(txt)}
        style={styles.textInput}
        placeholder={placeholder}
        clearButtonMode="always"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType={type}
      />
    </View>
  );
};

export default Input;
// // Prop type warnings
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  type: PropTypes.string
};

// Defaults for props
Input.defaultProps = {
  secureTextEntry: false,
  type: 'default'
};
