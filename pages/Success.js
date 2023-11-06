
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Button from '../components/Button';







export default function Success() {

    const navigation = useNavigation();


    const navToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
    };


  return (

    <>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Image  source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/monochromatic-surface-icon-library/success-56.png"}} style={{ height: 100, width: 100,}}></Image> 
      <View style={{margin:20}}><Text style={styles.text}>successfully Register</Text></View>
      <TouchableOpacity onPress={navToLogin}>
            <Button text={"Back to Login"}></Button>
          </TouchableOpacity>
      </View>
    </>

  )
}


const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 15
  },


})
