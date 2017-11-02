import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ListItem, Separetor } from '../components/List';

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleOnChange = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  themes = [
    { name: 'Blue', color: '#526977' },
    { name: 'Orange', color: '#D5856C' },
    { name: 'Green', color: '#46AE9F' },
    { name: 'Purple', color: '#9B7C8C' },
  ];

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {this.themes.map(({ name, color }) => (
          <View key={name}>
            <ListItem
              text={name}
              onPress={() => this.handleOnChange(color)}
              customIcon={<Icon name="ios-brush" size={20} color={color} />}
            />
            <Separetor />
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Themes;
