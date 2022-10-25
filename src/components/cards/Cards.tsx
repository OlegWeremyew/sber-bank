import React, { FC } from 'react';

import { View, Image, Text, ImageSourcePropType } from 'react-native';

import { COLORS, STYLES } from '../../../constants';
import creditCardChip from '../../assets/app-image/credit-card-chip.png';
import maestroLogo from '../../assets/card-logo/maestro-logo.png';
import masterCardLogo from '../../assets/card-logo/master-card-logo.png';
import visaLogo from '../../assets/card-logo/visa-logo.png';
import { useAuth } from '../../hooks';

type TypeCards = {
  id: string;
  number: string;
  img: ImageSourcePropType;
  type: string;
  balance: string;
};

const cards: TypeCards[] = [
  {
    id: '1-1-2-3-4-5-6-71',
    number: '4562 1122 4595 7852',
    img: masterCardLogo,
    type: 'MasterCard',
    balance: '92510',
  },
  {
    id: '1-1-2-3-4-5-6-72',
    number: '4574 1133 2295 2252',
    img: maestroLogo,
    type: 'Maestro',
    balance: '9240',
  },
  {
    id: '1-1-2-3-4-5-6-73',
    number: '4585 1144 4495 4452',
    img: visaLogo,
    type: 'Visa',
    balance: '43710',
  },
];

export const Cards: FC = () => {
  const { user } = useAuth();

  return (
    <View
      style={{
        marginVertical: 50,
        position: 'relative',
        overflow: 'hidden',
        height: 500,
      }}
    >
      {cards.map((card: TypeCards, index: number) => (
        <View
          key={card.id}
          style={{
            backgroundColor: COLORS.ACCENT,
            borderRadius: 30,
            padding: 20,
            position: index !== 0 ? 'absolute' : 'relative',
            top: index === 1 ? 12 : index === 2 ? 31 : 0,
            left: index === 1 ? 5 : index === 2 ? 5 : 0,
            width: '100%',
            zIndex: index === 1 ? 2 : index === 2 ? 1 : 3,
            shadowColor: 'black',
            transform: [
              { rotate: index === 1 ? '10deg' : index === 2 ? '18deg' : '0deg' },
            ],
            ...STYLES.boxShadow,
          }}
        >
          <Image source={creditCardChip} style={{ width: 40, height: 30 }} />
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              marginVertical: 20,
            }}
          >
            {card.number}
          </Text>
          <View
            style={{
              ...STYLES.flexDefault,
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  textTransform: 'uppercase',
                  fontSize: 10,
                  marginBottom: 6,
                }}
              >
                Card holder
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  marginBottom: 6,
                }}
              >
                {user.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              ...STYLES.flexDefault,
            }}
          >
            <View>
              <Image source={card.img} style={{ width: 90, height: 50 }} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  marginBottom: 6,
                }}
              >
                {card.type}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
