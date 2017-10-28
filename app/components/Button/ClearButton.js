import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text } from 'react-native';

import styles from './styles';

const ClearButton = ({ content, onPress }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" source={require('./images/icon.png')} style={styles.image} />
      <Text style={styles.text}> {content} </Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  content: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
