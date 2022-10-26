import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { COLORS } from './constants';
import { Balance, Cards, Footer, Header, QuickActions } from './src/components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainInfo}>
        <Header />
        <Cards />
        <Balance />
        <QuickActions />
      </View>
      <Footer />
    </SafeAreaView>
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
  mainInfo: {
    height: '100%',
  },
});
