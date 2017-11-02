import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const CheckIcon = ({ visible = false }) => {
  const iconStyles = [styles.icon, visible ? styles.iconVisible : ''];
  return (
    <View style={iconStyles}>
      {visible && (
        <Image
          resizeMode="contain"
          source={require('./images/check.png')}
          style={styles.checkIcon}
        />
      )}
    </View>
  );
};

CheckIcon.propTypes = {
  visible: PropTypes.bool,
};

export default CheckIcon;
