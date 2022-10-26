import React, { FC } from 'react';

import { View, Text } from 'react-native';

import { CARD } from './balance-data';
import { styles } from './styles';

export const Balance: FC = () => (
  <View style={styles.balanceContainer}>
    <Text style={styles.balanceTextInner}>Balance</Text>
    <Text style={styles.balanceValue}>
      {CARD.currency}
      {CARD.balance}
    </Text>
  </View>
);
