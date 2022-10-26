import { StyleSheet } from 'react-native';

import { COLORS, STYLES } from '../../../constants';

export const styles = StyleSheet.create({
  quickActionContainer: {
    ...STYLES.flexDefault,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  pressItem: {
    paddingVertical: 30,
    justifyContent: 'center',
    borderRadius: 30,
    padding: 20,
    backgroundColor: '#2C2C2C',
  },
  pressItemContainer: {
    alignItems: 'center',
  },
  innerText: {
    color: COLORS.TEXT_WHITE,
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '700',
    marginTop: 12,
  },
  cashValue: {
    color: COLORS.TEXT_WHITE,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '700',
  },
});
