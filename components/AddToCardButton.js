
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'

export default function AddToCardButton() {

    return (
        
        <View style={styles.buttoncontainer}>
            <Text style={styles.text}>Add to Cart</Text>
        </View>
       
    )
}


const styles = StyleSheet.create({
    buttoncontainer:{
        height: 30, 
        backgroundColor: "#115dbf", 
        marginEnd: 10, 
        borderRadius: 10, 
        alignItems: "center", 
        justifyContent: "center" 
    },

    text:{
        fontWeight: "bold", 
        fontSize: 12, 
        color: "white"
    },
})
