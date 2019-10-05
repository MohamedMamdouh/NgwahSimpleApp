import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import SubmitButton from '../Components/SubmitButton';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignInScreenStyle';

class SignInScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          {/* <Input /> */}
          <View style={styles.innerContainer}>
            <View>
              <Text>Sign In</Text>
            </View>
            <View>
              <Input placeholder="Email" />
              <Input placeholder="password" secureTextEntry />
              <SubmitButton />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
