import React, { Component } from 'react';
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
  state = {
    currencyValue: 0,
  };

  handlePressBaseCurrency = () => {
    console.log('====================================');
    console.log('change base currency');
    console.log('====================================');
  };

  handlePressQuoteCurrency = () => {
    console.log('====================================');
    console.log('change quote currency');
    console.log('====================================');
  };

  handleInputCurrency = (e) => {};

  handlePressSwapCurrency = () => {};
  handlePressOptions = () => {};

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Header onPress={this.handlePressOptions} />
        <Logo />
        <KeyboardAvoidingView behavior="padding">
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
        </KeyboardAvoidingView>
        <LastConverted
          conversionRate={TEMP_CONVERSION_RATE}
          date={TEMP_CONVERTION_DATE}
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
        />
        <ClearButton content="Reverse currency" onPress={this.handlePressSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
