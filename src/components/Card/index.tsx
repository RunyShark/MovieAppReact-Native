/* eslint-disable react-native/no-inline-styles */

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {image, Movies} from '../../index';
import {styles} from './CardStyles';

interface CardProps extends Movies {
  height?: number;
  width?: number;
}

export const Card = ({
  poster_path,
  height = 420,
  width = 300,
  ...rest
}: CardProps) => {
  const uri = image(poster_path);

  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('DetailsScreen', rest)}
      activeOpacity={0.8}
      style={{
        height,
        width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.containerImg}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};
