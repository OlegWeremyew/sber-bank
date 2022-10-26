import { StyleSheet } from 'react-native';

import { COLORS, STYLES } from '../../../constants';

export const styles = StyleSheet.create({
  cardText: {
    color: COLORS.TEXT_WHITE,
    fontSize: 10,
    marginBottom: 6,
  },
  cardLogo: {
    width: 90,
    height: 50,
  },
  userName: {
    color: COLORS.TEXT_WHITE,
    fontSize: 10,
    marginBottom: 6,
  },
  userIntroText: {
    color: COLORS.TEXT_WHITE,
    textTransform: 'uppercase',
    fontSize: 10,
    marginBottom: 6,
  },
  userInfoBlock: {
    ...STYLES.flexDefault,
  },
  chipImg: {
    width: 40,
    height: 30,
  },
  cardNumber: {
    color: COLORS.TEXT_WHITE,
    fontSize: 24,
    marginVertical: 20,
  },
  cardContainer: {
    marginVertical: 50,
    overflow: 'hidden',
    height: 300,
  },
});
