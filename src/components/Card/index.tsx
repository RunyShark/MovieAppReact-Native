import React from 'react';
import {Text, View} from 'react-native';
import {Movies} from '../../index';

interface CardProps extends Movies {}

export const Card = ({title}: CardProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
