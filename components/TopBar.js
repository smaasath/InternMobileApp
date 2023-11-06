import { Text, StyleSheet, View,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function TopBar() {
    
    const navigation = useNavigation();


    const navToCard = () => {
        navigation.navigate("Card");
    };
 
    return (
        <View style={styles.topbar}>
        <View style={styles.topbarcol1}>
            <Image source={require('../assets/logo.png')} style={{ height: 40, width: 40, }}></Image>
        </View>

        <View style={styles.topbarcol2}>
            <TouchableOpacity onPress={navToCard}>
                <Image  source={{ uri: "https://img.icons8.com/ios-filled/50/add-shopping-cart.png"}} style={{ height: 30, width: 30,}}></Image>
            </TouchableOpacity>

        </View>

    </View>
    )
  }


const styles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '10%',
        padding: 10,
        paddingTop:"10%",
        alignItems:"center",
       
        
    },

    topbarcol1: {
        flex: 10,

    },
    topbarcol2: {
        flex: 2,


    }
})
