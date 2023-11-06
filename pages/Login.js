
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from 'react'
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { ValidateEmail, emptyValueValidate, tostMessage } from './Validations';
import axios from 'axios';




export default function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigation = useNavigation();


  const navToRegister = () => {
    navigation.navigate("Register");
  };

  const navtoHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };


  function validate() {
    let status = '';

    if (emptyValueValidate(email) && emptyValueValidate(password)) {
      if (ValidateEmail(email)) {
        Login();
      } else {
        status = "Enter a Valid Gmail";
      }
    } else {
      status = "Fill All Fields"
    }

    if (status) {
      tostMessage(status);
    }
  }


  function Login() {
    axios.post(
      'https://user-dev.delivergate.com/api/v1/webshop_customer/login',
      {
        username: email,
        password: password,
        grant_type: "password",
        account_brand: 1
      },
      {
        headers: {
          "x-tenant-code": "subway",
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Device": "Mobile-App"
        },
      }
    )
      .then(function (response) {
        console.log('Registration successful:', response.data);
        navtoHome();

      })
      .catch(function (error) {
        tostMessage(error.response.data.message)


      });
  }

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center", margin: 60 }}>
          <Image source={require('../assets/logo.png')} style={{ height: 150, width: 150, }}></Image>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Login Here</Text>
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
          <TouchableOpacity onPress={validate}>
            <Button text={"Login"}></Button>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", margin: 25, justifyContent: "center" }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Don't Have an Account ?</Text>
          </View>
          <TouchableOpacity onPress={navToRegister}>
            <Text style={{ color: "#115dbf", fontWeight: "bold", fontSize: 15, }}>  Register Here </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({})
