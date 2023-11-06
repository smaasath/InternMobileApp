import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';



export default function InputField({url,placeholder,onChangeText,inputMode,maxLength,secureTextEntry}) {

    return (
        <View style={styles.InputCon}>
            <Image
                source={{ uri: url }}
                style={{ height: 20, width: 20 }}
            />
            <TextInput
                style={{ flex: 1, paddingLeft: 10 }}
                placeholder={placeholder}
                onChangeText={onChangeText}
                inputMode={inputMode}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                
                
            >

            </TextInput>

        </View>
    )
}


const styles = StyleSheet.create({
    InputCon: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        padding: 10,
        margin: 10,
        marginLeft:25,
        marginRight:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})
