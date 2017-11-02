import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputButton } from '../components/TextInputButton';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_BASE_QUOTE = '79.74';
const TEMP_CONVERSION_RATE = '0.7974';
const TEMP_CONVERTION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  state = {
    currencyValue: 0,
  };

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleInputCurrency = (e) => {};

  handlePressSwapCurrency = () => {};
  handlePressOptions = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Header onPress={this.handlePressOptions} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <TextInputButton
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            onPress={this.handlePressBaseCurrency}
            keyboardType="numeric"
            onChange={this.handleInputCurrency}
            value={this.state.currencyValue.toString()}
          />
          <TextInputButton
            buttonText={TEMP_QUOTE_CURRENCY}
            value={TEMP_BASE_QUOTE}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
          />
          <LastConverted
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERTION_DATE}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
          />
        </KeyboardAvoidingView>
        <ClearButton content="Reverse currency" onPress={this.handlePressSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
