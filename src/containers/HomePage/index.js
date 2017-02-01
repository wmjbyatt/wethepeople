import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  doChangeText,
} from './actions';

import {
  selectText,
} from './selectors';


/*
  NOTE: I've gone and created the very basic of the form layout here,
  on my screen it tests right on a simulated iPad Air 2.0.

  TODO:
    Content:
      - Branding
        - I need logo from PPC still
      - Submit button
      - Big check mark thanks for signing up
      - Hamburger menu
        - Only child needed is "submit to cloud"
    Behaviors:
      - Clear text from inputs on focus
      - Store form data in local
      - Validations
        - We'll just require first name, last name, and email right now
        - Validate state iff state is entered
        - Validate e-mail, might as well, we can keep it simple: /.+@.+.{2,}/
      - POST to Heroku

      -- WJB
*/
const styles = StyleSheet.create({
  textInput: {
    height: 24,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
    padding: 4,
  },
  stateInput: {
    height: 24,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
    padding: 4,
    flexGrow: 1,
  },
  zipInput: {
    height: 24,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
    padding: 4,
    flexGrow: 1,
  }
})

const HomePage = ({ text, changetext }) => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="First Name"
    />

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="Last Name"
    />

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="Email Address"
    />

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="Address 1"
    />

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="Address 2"
    />

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="City"
    />

  <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
      <TextInput
        style={styles.stateInput}
        onChangeText={ changetext }
        value="State"
      />

      <TextInput
        style={styles.zipInput}
        onChangeText={ changetext }
        value="Zip"
      />
    </View>

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="Employer"
    />

    <TextInput
      style={styles.textInput}
      onChangeText={ changetext }
      value="Occupation"
    />
    <Text>{text}</Text>
  </View>
);

HomePage.propTypes = {
  text: React.PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  const dispatchProps = {
    changetext: input => dispatch(doChangeText(input)),
    dispatch,
  };

  return dispatchProps;
};

const mapStateToProps = createStructuredSelector({
  text: selectText(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
