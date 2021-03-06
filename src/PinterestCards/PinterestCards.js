import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';

import {Card, CardHeader, CardContent} from '../Card';

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
            marginTop: -30,
            backgroundColor: 'transparent',
            elevation: 0,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={item.buttonFunction ? item.buttonFunction : null}>
            <CardHeader
              image={{uri: item.image}}
              imageStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                height: item.imageHeight ? item.imageHeight : 200,
                backgroundColor: item.cardBackgroundColor
                  ? item.cardBackgroundColor
                  : '#121111',
                color: item.color ? item.color : 'white',
                borderRadius: item.borderRadius ? item.borderRadius : 10,
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
          <CardContent>
            <Text
              style={{
                fontSize: item.primaryTextSize ? item.primaryTextSize : 14,
                textAlign: item.primaryTextAlign
                  ? item.primaryTextAlign
                  : 'left',
                color: item.primaryTextColor ? item.primaryTextColor : 'black',
                fontWeight: item.primaryFontWeight
                  ? item.primaryFontWeight
                  : 'bold',
                fontFamily: item.primaryFontFamily
                  ? item.primaryFontFamily
                  : 'Arial',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: item.secondaryTextSize ? item.secondaryTextSize : 12,
                color: item.secondaryTextColor
                  ? item.secondaryTextColor
                  : 'black',
                textAlign: item.secondaryTextAlign
                  ? item.secondaryTextAlign
                  : 'left',
                fontFamily: item.secondaryFontFamily
                  ? item.secondaryFontFamily
                  : 'Arial',
                fontWeight: item.secondaryFontWeight
                  ? item.secondaryFontWeight
                  : 'normal',
              }}>
              {item.description}
            </Text>
          </CardContent>
        </Card>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

function PinterestCards({data}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.MainContainer}>
        <PinterestCard data={data} />
      </View>
    </View>
  );
}

export default PinterestCards;
