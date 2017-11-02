import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ListItem, Separetor } from '../components/List';

const TEMP_COLOR = '#84848484';
const TEMP_SIZE = 22;

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleThemePress = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes');
  };

  handleSitePress = () => {
    Linking.openURL('http://fixer.io').catch(() => alert('An error occured'));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          customIcon={
            <Icon name={`${ICON_PREFIX}-arrow-forward`} color={TEMP_COLOR} size={TEMP_SIZE} />
          }
        />
        <Separetor />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={<Icon name={`${ICON_PREFIX}-link`} color={TEMP_COLOR} size={TEMP_SIZE} />}
        />
        <Separetor />
      </ScrollView>
    );
  }
}

export default Options;
