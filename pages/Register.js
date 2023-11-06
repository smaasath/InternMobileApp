
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import InputField from '../components/InputField'
import { useState } from 'react'
import Button from '../components/Button';


export default function Register() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conPassword, setconPassword] = useState("");
  const [contactNumber, setcontactNumber] = useState("");

  function Validate() {
    let status;
    if (emptyValueValidate(firstName) && emptyValueValidate(lastName)
      && emptyValueValidate(email) && emptyValueValidate(password)
      && emptyValueValidate(conPassword) && emptyValueValidate(contactNumber)) {

      if (ValidateEmail(email) && ValidateContactNumber(contactNumber)
        && ValidatePassword(password) && ValidateConfirmPassword()) {

        alert("Success");

      } else {
        status = !ValidateEmail(email) ? "Invalid Email" : 
        (!ValidateContactNumber(contactNumber) ? "Invalid Contact Number" : 
        (!ValidatePassword(password) ? "Invalid Password" : 
        (!ValidateConfirmPassword(conPassword) ? "Passwords do not match" : "Unknown Error")))
      }

    } else {
      status = "All Fields Need to fill";
    }

    tostMessage(status);

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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
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
