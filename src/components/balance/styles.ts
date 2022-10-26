import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

export const styles = StyleSheet.create({
  balanceContainer: {
    marginTop: -60,
  },
  balanceTextInner: {
    color: COLORS.TEXT_GRAY,
    fontSize: 20,
    marginBottom: 6,
  },
  balanceValue: {
    color: COLORS.TEXT_WHITE,
    fontSize: 26,
    fontWeight: '700',
  },
});
