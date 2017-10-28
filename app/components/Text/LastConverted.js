import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({
  conversionRate, date, base, quote,
}) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  conversionRate: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  base: PropTypes.string,
  quote: PropTypes.string,
};

export default LastConverted;
