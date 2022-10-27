import { StyleSheet } from 'react-native';

import { STYLES } from '../../../constants';

export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    ...STYLES.flexDefault,
    justifyContent: 'space-around',
    paddingTop: 70,
  },
  footerItem: {
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
