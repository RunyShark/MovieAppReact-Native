import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';

import {image, RootStackParams} from '../../index';
import {styles} from './DetailsStyle';
const {height} = Dimensions.get('screen');
interface DetailsProps
  extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({
  route: {
    params: {title, original_title, backdrop_path},
  },
}: DetailsProps) => {
  const uri = image(backdrop_path);

  return (
    <ScrollView>
      <View style={{...styles.imageContainer, height: height * 0.3}}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.marginContainerText}>
        <Text style={styles.subtitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.marginContainerText}></View>
    </ScrollView>
  );
};
