import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import ColoredCard from './ColoredCard';


function ColorfulCards({data}) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ColoredCard
            key={index}
            title={item.title}
            description={item.description}
            buttonTitle={item.buttonTitle}
            buttonFunction={item.buttonFunction}
            cardBackground={item.backgroundColor ? item.backgroundColor : '#399ce3'}
            cardHeight={item.cardHeight ? item.cardHeight : 320}
            cardWidth={item.cardWidth ? item.cardWidth : null}
            cardFlexDirection="column"
            cardMargin={item.cardMargin ? item.cardMargin :10}
            cardBorderRadius={item.cardBorderRadius ? item.cardBorderRadius : 20}
            cardPadding={item.cardPadding ? item.cardPadding :16}
            primaryTextColor={item.primaryTextColor ? item.primaryTextColor :"white"}
            primaryTextSize={item.primaryTextSize ? item.primaryTextSize :28}
            primaryTextWeight={item.primaryTextWeight ? item.primaryTextWeight :"bold"}
            primaryTextTop={item.primaryTextTop ? item.primaryTextTop :15}
            secondaryTextColor={item.secondaryTextColor ? item.secondaryTextColor :"white"}
            secondaryTextSize={item.secondaryTextSize ? item.secondaryTextSize :16}
            buttonWidth={item.buttonWidth ? item.buttonWidth :150}
            buttonHeight={item.buttonHeight ? item.buttonHeight :50}
            buttonTop={item.buttonTop ? item.buttonTop :20}
            buttonBackground={item.buttonBackground ? item.buttonBackground :"#05ada5"}
            buttonBorderRadius={item.buttonBorderRadius ? item.buttonBorderRadius :12}
            buttonPadding={item.buttonPadding ? item.buttonPadding :8}
            buttonTextColor={item.buttonTextColor ? item.buttonTextColor :"white"}
            buttonTextAlign={item.buttonTextAlign ? item.buttonTextAlign : "center"}
            buttonTextBottom={item.buttonTextBottom ? item.buttonTextBottom :8}
            buttonTextSize={item.buttonTextSize ? item.buttonTextSize :14}
            buttonTextTop={item.buttonTextTop ? item.buttonTextTop :8}
            cardBodyHeight={item.cardBodyHeight ? item.cardBodyHeight : 150 }
            cardHeaderJustifyContent={item.cardHeaderJustifyContent ? item.cardHeaderJustifyContent: "flex-start"}
            cardBodyJustifyContent={item.cardBodyJustifyContent ? item.cardBodyJustifyContent : "flex-start"}
            cardButtomJustifyContent={item.cardButtomJustifyContent ? item.cardButtomJustifyContent : "flex-start"}
            cardBodyAlignItem={item.cardBodyAlignItem ? item.cardBodyAlignItem : "flex-start"}
            cardHeaderAlignItem={item.cardHeaderAlignItem ? item.cardHeaderAlignItem : "flex-start"}
            cardButtonAlignItem={item.cardButtonAlignItem ? item.cardButtonAlignItem : "flex-start"}
          />
        )}
      />
    </View>
  );
}

export default ColorfulCards;
