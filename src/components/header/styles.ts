import { StyleSheet } from 'react-native';

import { COLORS, STYLES } from '../../../constants';

export const styles = StyleSheet.create({
  headerContainer: {
    ...STYLES.flexDefault,
  },
  userGreeting: {
    color: COLORS.TEXT_WHITE,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  userGreetingText: {
    color: COLORS.TEXT_GRAY,
    fontSize: 16,
    fontWeight: '700',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  logoutButton: {
    width: '90%',
    height: 40,
    margin: 12,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
