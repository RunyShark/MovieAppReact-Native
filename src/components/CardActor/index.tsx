import React from 'react';
import {Image, Text, View} from 'react-native';

import {Cast} from '../../interface';
import {styles} from './CardDetailsStyle';

interface CardActorProps extends Cast {}

export const CardActor = ({name, character, profile_path}: CardActorProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
      <View style={styles.actorInfo}>
        <Text style={styles.nameActor}>{name}</Text>
        <Text style={styles.subtitle}>{character}</Text>
      </View>
    </View>
  );
};
