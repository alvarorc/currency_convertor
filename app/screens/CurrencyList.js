import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separetor } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleChangeCurrency = (item) => {
    const { navigation } = this.props;
    navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENCY}
              onPress={() => this.handleChangeCurrency(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separetor}
        />
      </View>
    );
  }
}

export default CurrencyList;
