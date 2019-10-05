import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import SubmitButton from '../Components/SubmitButton';
import RedirectText from '../Components/RedirectText';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PhoneSignInScreenStyle';

class PhoneSignInScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.innerContainer}>
            <View>
              <Text>Phone signIn</Text>
            </View>
            <View>
              <Input placeholder="Phone Number" type="number-pad" />
              <SubmitButton />
              <RedirectText
                title="Login using email"
                navigation={() => navigation.navigate('SignInScreen')}
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
)(PhoneSignInScreen);
