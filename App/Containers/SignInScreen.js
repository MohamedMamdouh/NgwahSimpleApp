import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import SubmitButton from '../Components/SubmitButton';
import RedirectText from '../Components/RedirectText';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignInScreenStyle';

class SignInScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.innerContainer}>
            <View>
              <Text>Sign In</Text>
            </View>
            <View>
              <Input placeholder="Email" />
              <Input placeholder="password" secureTextEntry />
              <SubmitButton />
              <RedirectText
                title="Login using phone Number"
                navigation={() => navigation.navigate('PhoneSignInScreen')}
              />
              <RedirectText
                title="SignUp"
                navigation={() => navigation.navigate('SignUpScreen')}
              />
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
