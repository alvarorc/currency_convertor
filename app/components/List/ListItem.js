import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import CheckIcon from './CheckIcon';

import styles from './styles';

const ListItem = ({
  text, selected, onPress, customIcon = null,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underLayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {!customIcon && <CheckIcon visible={selected} />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  customIcon: PropTypes.element,
};

export default ListItem;
