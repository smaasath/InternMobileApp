
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import AddToCardButton from './AddToCardButton'


export default function FoodCard({ItemName,Description,imageUrl,Price}) {

    return (
        <View style={styles.foodcontainer}>
            <View style={{ flex: 4 }}>

                <View style={{ flex: 1, padding: 10, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{ItemName}</Text>
                </View>
                <View style={{ flex: 2, padding: 10, paddingTop: 0, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 10, color: "#515A5A" }}>{Description == null ? "" : Description}</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 2 }}>
                    <View style={{ flex: 2, paddingStart: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, }}>${Price}</Text>
                    </View>
                    <View style={{ flex: 2, }}>
                        <TouchableOpacity>
                            <AddToCardButton></AddToCardButton>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <View style={{ flex: 2 }}>
                <Image
                    source={{ uri: imageUrl == null ? "https://assets.materialup.com/uploads/98622f57-ac59-4b44-8db2-3355bb43efed/preview.jpg" : imageUrl }}
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
        height: 150,
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
