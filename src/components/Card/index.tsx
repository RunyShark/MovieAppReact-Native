/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {Movies} from '../../index';
import {styles} from './CardStyles';

interface CardProps extends Movies {
  height?: number;
  width?: number;
}

export const Card = ({poster_path, height = 420, width = 300}: CardProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View
      style={{
        height,
        width,
        marginHorizontal: 8,
      }}>
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
