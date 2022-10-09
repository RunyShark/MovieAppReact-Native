import React from 'react';
import {Image, View} from 'react-native';
import {Movies} from '../../index';
import {styles} from './CardStyles';

interface CardProps extends Movies {}

export const Card = ({poster_path}: CardProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};
