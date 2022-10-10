import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {format} from 'currency-formatter';

import {styles} from './DetailsStyle';
import {Cast, MovieFull, CardActor} from '../../index';
import {FlatList} from 'react-native-gesture-handler';

interface PropsDetails {
  movieFull: MovieFull;
  cast: Cast[];
}

export const Details = ({movieFull, cast}: PropsDetails) => {
  return (
    <>
      <View style={styles.details}>
        <View style={styles.containerReading}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={styles.gender}>
            -{movieFull.genres.map((g) => g.name).join(',')}
          </Text>
        </View>

        <Text style={styles.history}>History</Text>
        <Text style={styles.overView}>{movieFull.overview}</Text>

        <Text style={styles.history}>Budget</Text>
        <Text style={styles.overView}>
          {format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={styles.cast}>
        <Text style={styles.castText}>Actors</Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CardActor {...item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flat}
        />
      </View>
    </>
  );
};
