import React from 'react';
import {Text, View} from 'react-native';
import {Cast} from '../../interface';
import {styles} from './CardDetailsStyle';

interface CardActorProps extends Cast {}

export const CardActor = ({name, character}: CardActorProps) => {
  return (
    <View>
      <Text style={styles.nameActor}>{name}</Text>;
      <Text style={styles.subtitle}>{character}</Text>;
    </View>
  );
};
