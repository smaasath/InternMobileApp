
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../Redux/Reducers';

export default function Categories() {

    const dispatch = useDispatch();
    const { Category, SelectedCategory } = useSelector((state) => state.user);

    useEffect(() => {

        dispatch(setSelectedCategory(Category[0]));
    
    
      }, []);


    return (
        <>
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {Category.map((Category, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => dispatch(setSelectedCategory(Category))}
                        >
                            <View style={{
                                ...styles.category,
                                backgroundColor: SelectedCategory === Category ? "#AED6F1" : "white"
                            }}>
                                <Text style={styles.TextCategory}>{Category}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}


                </ScrollView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    category: {
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        padding: 5,
        margin: 10,
        borderRadius: 10,
    },
    TextCategory: {
        fontWeight: "bold",
        fontSize: 15,
    }
})
