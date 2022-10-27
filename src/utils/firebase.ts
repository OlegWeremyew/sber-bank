import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyClgXRLmY9BSDL8wBqEfG-LG9TLc2Q1iAQ',
  authDomain: 'sberbank-7576b.firebaseapp.com',
  projectId: 'sberbank-7576b',
  storageBucket: 'sberbank-7576b.appspot.com',
  messagingSenderId: '1084651568199',
  appId: '1:1084651568199:web:18232880c4eacfbb8dc562',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
