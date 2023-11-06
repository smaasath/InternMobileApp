
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'

export default function Button({text}) {

    return (
        
        <View style={styles.buttoncontainer}>
            <Text style={styles.text}>{text}</Text>
        </View>
       
    )
}


const styles = StyleSheet.create({
    buttoncontainer:{
        height: 40, 
        width:120,
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
