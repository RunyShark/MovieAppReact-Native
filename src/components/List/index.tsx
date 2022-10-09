/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card, Movies} from '../../index';
import {styles} from './ListStyle';
interface PropsFlatList {
  movies: Movies[];
  title?: string;
  height?: number;
  width?: number;
  showsHorizontal?: boolean;
}

export const FlatListCustom = ({
  title,
  height = 200,
  width = 140,
  showsHorizontal = false,
  movies,
}: PropsFlatList) => (
  <View
    style={{
      // eslint-disable-next-line no-extra-boolean-cast
      height: !!title ? 270 : 230,
    }}>
    {title && <Text style={styles.textList}>{title}</Text>}
    <FlatList
      data={movies}
      renderItem={({item}: any) => (
        <Card {...item} width={width} height={height} />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={showsHorizontal}
    />
  </View>
);
