
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import InputField from '../components/InputField'
import { useState, useEffect } from 'react'
import Button from '../components/Button';
import axios from 'axios';


export default function Register() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conPassword, setconPassword] = useState("");
  const [contactNumber, setcontactNumber] = useState("");


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
      if (ValidateEmail(email) && ValidateContactNumber(contactNumber) && ValidatePassword(password) && ValidateConfirmPassword()) {
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


  function tostMessage(status) {
    ToastAndroid.showWithGravityAndOffset(
      status,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      2,
      50,
    );
  }




  function register() {
    axios.post(
      'https://user-dev.delivergate.com/api/v1/webshop_customer/register',
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        contact_number: contactNumber,
        account_brand: 2,
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
    .then(function(response) {
      console.log('Registration successful:', response.data.message);
      
    })
    .catch(function(error) {
      tostMessage(error.response.data.message)
      
      
    });
  }
  




  function emptyValueValidate(value) {
    return value == "" ? false : true;
  }

  function ValidateEmail(value) {
    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(value);
  }

  function ValidateContactNumber(number) {
    var regex = /^(?:\+94|0)(?:[0-9]{9})$/;
    return regex.test(number);
  }

  function ValidatePassword() {
    //  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    // return passwordRegex.test(password);
    return true;

  }

  function ValidateConfirmPassword() {
    return password === conPassword;
  }

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center", margin: 25 }}>
          <Image source={require('../assets/logo.png')} style={{ height: 150, width: 150, }}></Image>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Register Your Account Here</Text>
        </View>
        <View>
          <InputField
            url={"https://img.icons8.com/material-rounded/24/name.png"}
            placeholder={"Enter Your First Name"}
            inputMode={"text"}
            onChangeText={(text) => setfirstName(text)}
          ></InputField>

          <InputField
            url={"https://img.icons8.com/material-rounded/24/name.png"}
            placeholder={"Enter Your last Name"}
            inputMode={"text"}
            onChangeText={(text) => setlastName(text)}
          ></InputField>

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
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({})
