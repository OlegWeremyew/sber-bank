import React, { FC } from 'react';

import { Entypo } from '@expo/vector-icons';
import { Text, TouchableHighlight, View } from 'react-native';

import { COLORS } from '../../../constants';

import { styles } from './styles';

export const QuickActions: FC = () => {
  const makeTransaction = (value: number) => {
    console.log(value);
  };

  return (
    <View style={styles.quickActionContainer}>
      <TouchableHighlight
        onPress={() => makeTransaction(100)}
        underlayColor={COLORS.ACCENT}
        style={styles.pressItem}
      >
        <View style={styles.pressItemContainer}>
          <Entypo name="briefcase" size={35} color={COLORS.TEXT_WHITE} />
          <Text style={styles.innerText}>Salary</Text>
          <Text style={{ color: COLORS.TEXT_GRAY, fontSize: 12 }}>
            Belong interactive
          </Text>
          <Text style={styles.cashValue}>$100</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => makeTransaction(600)}
        underlayColor={COLORS.ACCENT}
        style={styles.pressItem}
      >
        <View style={styles.pressItemContainer}>
          <Entypo name="paypal" size={35} color={COLORS.TEXT_WHITE} />
          <Text style={styles.innerText}>Paypal</Text>
          <Text style={{ color: COLORS.TEXT_GRAY, fontSize: 12 }}>Freelance payment</Text>
          <Text style={styles.cashValue}>$600</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
