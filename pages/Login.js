
import { Text, StyleSheet, View } from 'react-native'

export default function Login() {
 
    return (
      <>
      <ScrollView>
        <View style={{ alignItems: "center", margin: 25 }}>
          <Image source={require('../assets/logo.png')} style={{ height: 150, width: 150, }}></Image>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Register Your Account Here</Text>
        </View>
        <View>
    
          <InputField
            url={"https://img.icons8.com/ios-glyphs/30/new-post.png"}
            placeholder={"Enter Your Email"}
            inputMode={"email"}
            onChangeText={(text) => setemail(text)}
          ></InputField>

          <InputField
            url={"https://img.icons8.com/ios-filled/50/password.png"}
            placeholder={"Enter Your Password"}
            inputMode={"text"}
            onChangeText={(text) => setpassword(text)}
            secureTextEntry={true}
          ></InputField>

        </View>
        <View style={{ alignItems: "flex-end", margin: 25 }}>
          <TouchableOpacity onPress={Validate}>
            <Button text={"Register"}></Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
    )
  }


const styles = StyleSheet.create({})
