
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Button from '../components/Button';







export default function Settings() {

    const navigation = useNavigation();


    const navToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
    };


  return (

    <>
      <TopBar></TopBar>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <TouchableOpacity onPress={navToLogin}>
            <Button text={"Logout"}></Button>
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
