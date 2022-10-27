import React, { FC, useEffect, useState } from 'react';

import {
  onSnapshot,
  collection,
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { View, Image, Text } from 'react-native';

import { COLORS, STYLES } from '../../../constants';
import creditCardChip from '../../assets/app-image/credit-card-chip.png';
import { useAuth } from '../../hooks';
import { db } from '../../utils/firebase';

import { CARDS } from './card-data';
import { styles } from './styles';
import { TypeCards } from './types';

export const Cards: FC = () => {
  const { user } = useAuth();

  const [cards, setCards] = useState<any[]>([] as any[]);

  const handlerGetItemStyle = (index: number) => ({
    backgroundColor: COLORS.ACCENT,
    borderRadius: 30,
    padding: 20,
    position: index !== 0 ? 'absolute' : 'relative',
    top: index === 1 ? 10 : index === 2 ? 35 : 0,
    left: index === 1 ? 5 : index === 2 ? 5 : 0,
    width: '100%',
    zIndex: index === 1 ? 2 : index === 2 ? 1 : 3,
    shadowColor: COLORS.SHADOW_COLOR,
    transform: [{ rotate: index === 1 ? '12deg' : index === 2 ? '24deg' : '0deg' }],
    ...STYLES.boxShadow,
    height: 230,
  });

  useEffect(() => {
    if (user?.uid) {
      const collectionRef = collection(db, 'cards');
      const queryValue: any = query(collectionRef, where('user_id', '==', user.uid));

      const unSub = () => {
        onSnapshot(
          collection(queryValue, 'cards'),
          (snapshot: QuerySnapshot<DocumentData>) => {
            const snap: QueryDocumentSnapshot[] = snapshot.docs;
            const value = snap.map((doc: DocumentData) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setCards(value);
          },
        );
      };
      return () => unSub();
    }
    return () => {};
  }, []);

  return (
    <View style={styles.cardContainer}>
      {CARDS.map((card: TypeCards, index: number) => (
        <View key={card.id} style={handlerGetItemStyle(index)}>
          <Image source={creditCardChip} style={styles.chipImg} />
          <Text style={styles.cardNumber}>{card.number}</Text>
          <View style={[styles.userInfoBlock, { marginTop: 30 }]}>
            <View style={styles.userInfoBlock}>
              <View>
                <Text style={styles.userIntroText}>Card holder</Text>
                <Text style={styles.userName}>{user?.email}</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image source={card.img} style={styles.cardLogo} />
              <Text style={styles.cardText}>{card.type}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
