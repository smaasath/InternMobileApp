
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import InputField from '../components/InputField'
import { useState, useEffect } from 'react'
import Button from '../components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { emptyValueValidate, ValidateEmail, ValidateConfirmPassword, ValidateContactNumber, ValidatePassword, tostMessage } from './Validations';
import { REGISTER_URL , ACCOUNT_BRAND } from "@env";



export default function Register() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conPassword, setconPassword] = useState("");
  const [contactNumber, setcontactNumber] = useState("");


  const navigation = useNavigation();


  const navToLogin = () => {
    navigation.navigate("Login");
  };

  const navToSuccess = () => {
    navigation.navigate("Success");
  };


  async function Validate() {
    let status = '';

    if (
      emptyValueValidate(firstName) &&
      emptyValueValidate(lastName) &&
      emptyValueValidate(email) &&
      emptyValueValidate(password) &&
      emptyValueValidate(conPassword) &&
      emptyValueValidate(contactNumber)
    ) {
      if (ValidateEmail(email) && ValidateContactNumber(contactNumber) && ValidatePassword(password) && ValidateConfirmPassword(password,conPassword)) {
        register();
      } else {
        status = !ValidateEmail(email)
          ? 'Invalid Email'
          : !ValidateContactNumber(contactNumber)
            ? 'Invalid Contact Number'
            : !ValidatePassword(password)
              ? 'Password must contain 6 Letters eg: Adt$3!@#'
              : !ValidateConfirmPassword(conPassword)
                ? 'Passwords do not match'
                : 'Unknown Error';
      }
    } else {
      status = 'All Fields Need to Fill';
    }

    if (status) {
      tostMessage(status);
    }
  }







  function register() {
    axios.post(
      REGISTER_URL,
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        contact_number: contactNumber,
        account_brand: ACCOUNT_BRAND,
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
        navToSuccess();

      })
      .catch(function (error) {
        tostMessage(error.response.data.message)


      });
  }








  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center", margin: 25 }}>
          <Image source={require('../assets/logo.png')} style={{ height: 150, width: 150, }}></Image>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Register Your Account Here</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{flex:1}}>
              <InputField
                url={"https://img.icons8.com/material-rounded/24/name.png"}
                placeholder={"First Name"}
                inputMode={"text"}
                onChangeText={(text) => setfirstName(text)}
              ></InputField>
            </View>
            <View style={{flex:1,marginLeft:-25,}}>
              <InputField
                url={"https://img.icons8.com/material-rounded/24/name.png"}
                placeholder={"Last Name"}
                inputMode={"text"}
                onChangeText={(text) => setlastName(text)}
              ></InputField>
            </View>
          </View>
          <InputField
            url={"https://img.icons8.com/ios-filled/50/apple-phone.png"}
            placeholder={"Enter Your Contact Number"}
            inputMode={"tel"}
            onChangeText={(text) => setcontactNumber(text)}
            maxLength={10}
          ></InputField>

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

          <InputField
            url={"https://img.icons8.com/ios-filled/50/password.png"}
            placeholder={"Confirm Password"}
            inputMode={"text"}
            onChangeText={(text) => setconPassword(text)}
            secureTextEntry={true}
          ></InputField>
        </View>
        <View style={{ alignItems: "flex-end", margin: 25 }}>
          <TouchableOpacity onPress={Validate}>
            <Button text={"Register"}></Button>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", margin: 25, justifyContent: "center", }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Already Have an Account ?</Text>
          </View>
          <TouchableOpacity onPress={navToLogin}>
            <Text style={{ color: "#115dbf", fontWeight: "bold", fontSize: 15, }}>  Login Here </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </>
  )
}



const styles = StyleSheet.create({})
