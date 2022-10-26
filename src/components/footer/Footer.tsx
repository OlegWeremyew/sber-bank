import React, { FC, useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { styles } from './styles';

export const Footer: FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handlerSetActiveItem = (index: number) => {
    setActiveItem(index);
  };

  return (
    <View style={styles.footerContainer}>
      <Pressable style={styles.footerItem} onPress={() => handlerSetActiveItem(0)}>
        <Entypo name="home" size={30} color={activeItem === 0 ? 'darkred' : 'gray'} />
      </Pressable>
      <Pressable style={styles.footerItem} onPress={() => handlerSetActiveItem(1)}>
        <Entypo name="flash" size={30} color={activeItem === 1 ? 'darkred' : 'gray'} />
      </Pressable>
      <Pressable style={styles.footerItem} onPress={() => handlerSetActiveItem(2)}>
        <Entypo name="user" size={30} color={activeItem === 2 ? 'darkred' : 'gray'} />
      </Pressable>
      <Pressable style={styles.footerItem} onPress={() => handlerSetActiveItem(3)}>
        <Entypo name="bell" size={30} color={activeItem === 3 ? 'darkred' : 'gray'} />
      </Pressable>
    </View>
  );
};
