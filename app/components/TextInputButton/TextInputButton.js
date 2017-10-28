import React from 'react';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const UNDERLAY_COLOR = color('#FFF')
  .darken(0.1)
  .hsl()
  .string();

const TextInputButton = ({ buttonText, onPress, ...rest }) => {
  const baseContainerStyles = [styles.container];
  const containerStyles = rest.editable
    ? baseContainerStyles
    : baseContainerStyles.concat(styles.containerDisabled);

  return (
    <View style={containerStyles}>
      <TouchableHighlight style={styles.button} onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.divider} />
      <TextInput style={styles.input} {...rest} underlineColorAndroid="transparent" />
    </View>
  );
};

TextInputButton.defaultProps = {
  editable: true,
};

TextInputButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default TextInputButton;
