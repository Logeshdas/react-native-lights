import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function InputText({maxLengthValue, keyboardType, onChangeText,  placeholderText, placeholderTextColor, fontSizeValue, fontWeightValue, borderColorValue, borderWidthValue, borderBottomColorValue, borderBottomWidthValue, autoFocusValue, Value,}) {


    const styles = StyleSheet.create({
        fontSize: fontSizeValue ? fontSizeValue : 30 ,
        fontWeight: fontWeightValue ? fontWeightValue : "bold",
        borderColor:borderColorValue,
        borderWidth:borderWidthValue,
        borderBottomColor:borderBottomColorValue,
        borderBottomWidth:borderBottomWidthValue,
    
    })


  return (
    <View>
  <TextInput
            placeholder={placeholderText ? placeholderText : "9999999999" }
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#7D7D7D"}
            autoFocus={autoFocusValue ? autoFocusValue : true}
            maxLength={ maxLengthValue ? maxLengthValue : 10}
            keyboardType={keyboardType ? keyboardType : "numeric"}
            onChangeText={onChangeText}
            value={Value}
            borderBottomColor={styles.borderBottomColor}
            borderBottomWidth={styles.borderBottomWidth}
            fontSize={styles.fontSize}
            fontWeight={styles.fontWeight}
            borderColor={styles.borderColorValue}
            borderWidth={styles.borderWidthValue}

          />  
          
            </View>
  )



}



export default InputText;