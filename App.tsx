import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { COLORS } from './constants';
import { Balance, Cards, Footer, Header, QuickActions } from './src/components';
import { useAuth } from './src/hooks';
import { login } from './src/utils/firebase';

export default function App() {
  // @ts-ignore
  const { isLoggedIn } = useAuth;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={{ width: '95%' }}>
        {!isLoggedIn ? (
          <>
            <Header />
            <Cards />
            <Balance />
            <QuickActions />
            <Footer />
          </>
        ) : (
          <SafeAreaView style={{ width: 250 }}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter email"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Enter password"
              keyboardType="default"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={async () => await login(email, password)}
            >
              <Text style={styles.loginButtonText}>Sign in</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    height: '100%',
    padding: 24,
    paddingBottom: 75,
    backgroundColor: COLORS.BG_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.TEXT_WHITE,
    borderRadius: 10,
  },
  loginButton: {
    width: '90%',
    height: 40,
    margin: 12,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: COLORS.TEXT_WHITE,
  },
});
