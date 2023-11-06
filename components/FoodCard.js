
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import AddToCardButton from './AddToCardButton'
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSelectedCategory, setData, setItemData, addItemToCart } from '../Redux/Reducers';


export default function FoodCard({ item }) {

    const { Category, SelectedCategory, data, itemdata, searchtext, filtereddata } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart(item)); 
      };

    return (
        <View style={styles.foodcontainer}>
            <View style={{ flex: 4 }}>

                <View style={{ flex: 1, padding: 10, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.title}</Text>
                </View>
                <View style={{ flex: 3, paddingLeft: 10, paddingRight: 10, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 10, color: "#515A5A" }}>{item.description == "null" ? "" : item.description}</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 2, alignItems: "center", }}>
                    <View style={{ flex: 2, paddingStart: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, }}>${item.price}</Text>
                    </View>
                    <View style={{ flex: 2, }}>
                        <TouchableOpacity
                           onPress={handleAddToCart}
                        >
                            <AddToCardButton></AddToCardButton>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <View style={{ flex: 2 }}>
                <Image
                    source={{ uri: item.image_url == null ? "https://assets.materialup.com/uploads/98622f57-ac59-4b44-8db2-3355bb43efed/preview.jpg" : item.image_url }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    foodcontainer: {
        margin: 15,
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
        height: 170,
        borderRadius: 5,
        alignItems: "center",
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 5,
    },
})
