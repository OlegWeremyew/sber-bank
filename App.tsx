import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { COLORS } from './constants';
import { Balance, Cards, Footer, Header, QuickActions } from './src/components';
import { useAuth } from './src/hooks';
import { login } from './src/utils/firebase';

export default function App() {
  // @ts-ignore
  const { isLoggedIn } = useAuth;
  const [isLog, setIsLog] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      {isLog ? (
        <View>
          <ScrollView style={{ height: '100%' }}>
            <Header />
            <Cards />
            <Balance />
            <QuickActions />
          </ScrollView>
          <Footer />
        </View>
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
            onPress={async () => {
              // await login(email, password);
              setIsLog(true);
            }}
          >
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
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
