import React from 'react';
import {Image, Text, View} from 'react-native';
import {image} from '../../index';

import {Cast} from '../../interface';
import {styles} from './CardDetailsStyle';

interface CardActorProps extends Cast {}

export const CardActor = ({name, character, profile_path}: CardActorProps) => {
  const uri = image(profile_path);

  return (
    <View style={styles.container}>
      {uri && (
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={styles.nameActor}>{name}</Text>
        <Text style={styles.subtitle}>{character}</Text>
      </View>
    </View>
  );
};
