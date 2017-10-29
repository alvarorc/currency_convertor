import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageSize = new Animated.Value(styles.$largeContainerWidth);
    this.imageSize = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    const keyboardShowEvent = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const keyboardHideEvent = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

    this.keyboardShowListener = Keyboard.addListener(keyboardShowEvent, this._keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(keyboardHideEvent, this._keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  _keyboardShow = () => {
    const containerAnimated = Animated.timing(this.containerImageSize, {
      toValue: styles.$smallContainerWidth,
      duration: ANIMATION_DURATION,
    });

    const imageAnimated = Animated.timing(this.imageSize, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    });

    Animated.parallel([containerAnimated, imageAnimated]).start();
  };

  _keyboardHide = () => {
    const containerAnimated = Animated.timing(this.containerImageSize, {
      toValue: styles.$largeContainerWidth,
      duration: ANIMATION_DURATION,
    });

    const imageAnimated = Animated.timing(this.imageSize, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION,
    });

    Animated.parallel([containerAnimated, imageAnimated]).start();
  };

  render() {
    const containerImageStyles = [
      styles.containerImage,
      { width: this.containerImageSize, height: this.containerImageSize },
    ];
    const imageStyles = [styles.image, { width: this.imageSize }];
    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          source={require('./images/background.png')}
          style={containerImageStyles}
        >
          <Animated.Image
            resizeMode="contain"
            source={require('./images/logo.png')}
            style={imageStyles}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
