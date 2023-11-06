
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSelectedCategory, setData, setItemData, addItemToCart, decrementQuantity } from '../Redux/Reducers';
import React, { useState, useEffect } from 'react';


export default function Card() {

  const { Category, SelectedCategory, data, itemdata, searchtext, filtereddata, items } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [totalprice, settotalprice] = useState(0);

  useEffect(() => {

    const totalPrice = items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    settotalprice(totalPrice.toFixed(2));


  }, [items]);
  
  return (

    <ScrollView>
      <View style={{backgroundColor:"white"}}>
      <View style={{ marginTop: 15 }}>
        {items?.length > 0 ? (items.map((item, index) => (
          <View style={styles.foodcontainer} key={index}>
            <View style={{ flex: 3 }}>
              <Image
                source={{ uri: item.image_url == null ? "https://assets.materialup.com/uploads/98622f57-ac59-4b44-8db2-3355bb43efed/preview.jpg" : item.image_url }}
                style={styles.image}
              />
            </View>
            <View style={{ flex: 8, paddingLeft: 10, justifyContent: "center" }}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={styles.imagecon}>
              <TouchableOpacity onPress={() => dispatch(addItemToCart(item))}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-filled/50/add--v1.png" }}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.text}>{item.quantity}</Text>
            </View>
            <View style={styles.imagecon}>
              <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-filled/50/minus.png" }}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.text}>No Items Found</Text>
          </View>
        )}
      </View>
      <View style={{ flexDirection: "row", margin:15}}>
        <View style={{ flex: 4 }}>
        <Text style={styles.textPrice}>Total</Text>
        </View>

        <View style={{ flex: 4,alignItems:"flex-end" }}>
        <Text style={styles.textPrice}>${totalprice}</Text>
        </View>

      </View>
      </View>
    </ScrollView>

  );

}


const styles = StyleSheet.create({
  foodcontainer: {
    margin: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: "row",
    height: null,
    width: null,
    height: 75,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  text: {
    fontWeight: "bold",
    fontSize: 15
  },

  textPrice: {
    fontWeight: "bold",
    fontSize: 25
  },
  imagecon: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },

})
