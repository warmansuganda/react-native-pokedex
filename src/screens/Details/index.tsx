import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { RootStackParamList } from '@navigations/types';
import { findUser } from '@services/users';
import { User } from '@services/users/types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { username } = route.params;

  const { data } = useQuery<User, Error>(
    ['find-user', username],
    () => findUser(username).then(res => res.data),
    {
      onError: e => {
        console.log('error', e);
      },
    },
  );

  console.log(data);

  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: data?.avatar_url,
        }}
      />
      <Text>{`Hi, ${data?.name}`}</Text>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  sectionContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
});
