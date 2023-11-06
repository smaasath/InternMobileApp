
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import FoodCard from '../components/FoodCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSelectedCategory, setData, setItemData } from '../Redux/actions';




export default function Home() {



  const { Category, SelectedCategory, data, itemdata,filtereddata } = useSelector(state => state.userRedusers);
  const dispatch = useDispatch();



  useEffect(() => {

    getItems();
    dispatch(setSelectedCategory(Category[0]));


  }, []);



  useEffect(() => {
    if (data && data.hasOwnProperty(SelectedCategory)) {
      const items = data[SelectedCategory].map(entry => ({
        id : entry.id,
        title: entry.title,
        description: entry.description,
        image_url: entry.image_url,
        price: entry.price
      }));
      dispatch(setItemData(items));
      console.log(itemdata);

    } else {
      console.log("No 'offers' category found in the data.");
    }
  }, [SelectedCategory, data]);




  function getItems() {
    axios.get('https://pos-dev.delivergate.com/api/v1/webshop/main-menu/1/categories/webshop-brand/1/shop/2', {
      headers: {
        'x-tenant-code': 'subway'
      }
    })
      .then(function (response) {
        dispatch(setData(response.data.data));
        const categoryKeys = Object.keys(response.data.data);
        dispatch(setCategory(categoryKeys));


      })
      .catch(function (error) {
        console.log(error);
      })

  }

  return (

    <>
      <TopBar></TopBar>
      <ScrollView>
        <View style={{ backgroundColor: "#F8F9F9" }}>
          <SearchBar></SearchBar>
          <Categories></Categories>
          {filtereddata?.length > 0 && filtereddata.map((item) => (
            <FoodCard
              ItemName={item.title}
              Description={item.description}
              imageUrl={item.image_url}
              Price={item.price}
            />
          ))}
        </View>
      </ScrollView>
    </>

  )
}


const styles = StyleSheet.create({



})
