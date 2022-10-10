import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {format} from 'currency-formatter';
import {Cast, MovieFull} from '../../interface';
import {styles} from './DetailsStyle';

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
    </>
  );
};
