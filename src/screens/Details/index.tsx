import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {image, RootStackParams, useMovieDetails} from '../../index';
import {styles} from './DetailsStyle';
const {height} = Dimensions.get('screen');
interface DetailsProps
  extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({
  route: {
    params: {title, original_title, backdrop_path, id},
  },
}: DetailsProps) => {
  const uri = image(backdrop_path);
  const {cast, isLoading, movieFull} = useMovieDetails(id);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

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
      <View style={styles.marginContainerText}>
        <Icon name="star-outline" color="grey" size={20} />
      </View>
    </ScrollView>
  );
};
