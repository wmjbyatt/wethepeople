import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  doChangeText,
} from './actions';

import {
  selectText,
} from './selectors';

const HomePage = ({ text, changetext }) => (
  <View>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'blue'}}
      onChangeText={ changetext }
      value={ text }
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
