import React, { FC } from 'react';

import { View, Text, TouchableHighlight, Image, Linking } from 'react-native';

import userImage from '../../assets/app-image/user-image.png';
import { useAuth } from '../../hooks';

import { styles } from './styles';

export const Header: FC = () => {
  const { user } = useAuth();

  const handlerRedirectOnGooglePage = () => {
    Linking.openURL('https://www.google.ru/');
  };

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.userGreeting}>Hi {user?.email}</Text>
        <Text style={styles.userGreetingText}>Welcome back</Text>
      </View>
      <View>
        <TouchableHighlight onPress={handlerRedirectOnGooglePage}>
          <Image source={userImage} style={styles.userImage} />
        </TouchableHighlight>
      </View>
    </View>
  );
};
