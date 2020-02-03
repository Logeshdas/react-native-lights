import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import {Card, CardHeader, CardContent, CardFooter} from '../Card';

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 10,
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#121111',
    color: 'white',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  descriptionStyle: {
    fontSize: 12,
  },
});

const listData = [
  {
    title: 'Beautiful and dramatic Antelope',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    description: 'Lorem ipsum dolor sit amet et nuncat ',
    image: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, New Zealand',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

function PinterestCard({data}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Card
          style={{
            flex: 1,
            flexDirection: 'column',
            margin: 5,
            marginBottom: -35,
            backgroundColor: 'transparent',
            elevation: 0,
          }}>
          <CardHeader image={{uri: item.image}} imageStyle={styles.cardStyle} />
          <CardContent>
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.descriptionStyle}>{item.description}</Text>
          </CardContent>
        </Card>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  // return (
  //   <FlatList
  //     data={data}
  //     renderItem={({item}) => (
  //       <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
  //         <TouchableOpacity>
  //           <Image style={styles.cardStyle} source={{uri: item.image}} />
  //         </TouchableOpacity>
  //         <Text style={styles.textStyle}>{item.title}</Text>
  //         <Text style={styles.descriptionStyle}>{item.description}</Text>
  //       </View>
  //     )}
  //     numColumns={2}
  //     keyExtractor={(item, index) => index.toString()}
  //   />
  // );
}

function PinterestCards() {
  return (
    <View style={styles.MainContainer}>
      <PinterestCard data={listData} />
    </View>
  );
}

export default PinterestCards;