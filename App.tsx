import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from './constants';
import { Balance, Cards, Footer, Header } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Cards />
      <Balance />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    paddingTop: 55,
    paddingBottom: 75,
    backgroundColor: COLORS.BG_GRAY,
  },
});
