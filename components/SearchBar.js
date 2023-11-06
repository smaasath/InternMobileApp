import { Text, StyleSheet, View, Image, TouchableOpacity,TextInput } from 'react-native'



export default function SearchBar() {


    return (
        <View style={styles.InputCon}>
            <Image
                source={{ uri: "https://img.icons8.com/ios-glyphs/30/search--v1.png" }}
                style={{ height: 20, width: 20}}
              />
              <TextInput
              style={{flex:1,paddingLeft:10}}
              placeholder='Search Items Here'
              >
                
              </TextInput>

        </View>
    )
}


const styles = StyleSheet.create({
InputCon:{
    flexDirection:"row",
    height:40,
    backgroundColor:"white",
    borderRadius:20,
    alignItems:"center",
    padding:10,
    margin:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
}
})
