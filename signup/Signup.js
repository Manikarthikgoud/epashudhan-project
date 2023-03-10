// E- PASHUDHAN SIGNUP PORTAL
import React, { useState, useEffect } from "react";
import { RadioButton } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import axios from "axios";
const baseUrl = "http://192.168.43.178:3000/register-user";

// import client from '../api/client';
export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [district, setDistrict] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [createdUsername, setCreatedUsername] = useState("");
  const [createdPassword, setCreatedPassword] = useState("");

  const [checked, setChecked] = React.useState('');

  const onChangeNameHandler = (name) => {
    setName(name);
  };
  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangeHouseNoHandler = (houseNo) => {
    setHouseNo(houseNo);
  };
  const onChangeDistrictHandler = (district) => {
    setDistrict(district);
  };
  const onChangeStateAddressHandler = (stateAddress) => {
    setStateAddress(stateAddress);
  };
  const onChangePostalCodeHandler = (postalCode) => {
    setPostalCode(postalCode);
  };
  const onChangePhoneNoHandler = (phoneNo) => {
    setPhoneNo(phoneNo);
  };
  const onChangeCreatedUsernameHandler = (createdUsername) => {
    setCreatedUsername(createdUsername);
  };
  const onChangeCreatedPasswordHandler = (createdPassword) => {
    setCreatedPassword(createdPassword);
  };

  const onSubmitFormHandler = async (event) => {
    if (!name.trim() || !email.trim() || !houseNo.trim() || !district.trim() || !stateAddress.trim() || !postalCode.trim() || !phoneNo.trim() || !createdUsername.trim() || !createdPassword.trim()) {
      alert("Invalid Credentials");
      return;
    }
    try {
      const response = await axios.post(baseUrl, {
        name,
        email,
        houseNo,
        district,
        stateAddress,
        postalCode,
        phoneNo,
        createdUsername,
        createdPassword,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        // console.log(` You have created: ${JSON.stringify(response.data)}`);
        setName("");
        setEmail("");
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#ffffff", "#ffffff"]}
      start={{ x: 1, y: 0.05 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/greenbuffalo.png")}
          />
          <Text style={styles.TopEP}>E-Pashudhan SignUp</Text>
        </View>
        <View style={styles.Container}>
          <Text>Enter your Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                              ABCD"
            value={name}
            onChangeText={onChangeNameHandler}
          />
        </View>
        <View style={styles.Container}>
          <Text>Enter your email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                         xyz@email.com"
            value={email}
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View>
          <Text>   Enter your Address</Text>
          <View style={styles.Container}>
            {/* <Text>Enter your House No</Text> */}
            <TextInput
              style={styles.textInput}
              placeholder="                           House No"
              value={houseNo}
              onChangeText={onChangeHouseNoHandler}
            />
          </View>
          <View style={styles.Container}>
            {/* <Text>Enter your District</Text> */}
            <TextInput
              style={styles.textInput}
              placeholder="                           District"
              value={district}
              onChangeText={onChangeDistrictHandler}
            />
          </View>
          <View style={styles.Container}>
            {/* <Text>Enter your State</Text> */}
            <TextInput
              style={styles.textInput}
              placeholder="                            State"
              value={stateAddress}
              onChangeText={onChangeStateAddressHandler}
            />
          </View>
          <View style={styles.Container}>
            {/* <Text>Enter your State</Text> */}
            <TextInput
              style={styles.textInput}
              placeholder="                            Postal Code"
              value={postalCode}
              onChangeText={onChangePostalCodeHandler}
            />
          </View>
        </View>
        <View style={styles.Container}>
          <Text>Enter your Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                    XXXXXXXXXX"
            value={phoneNo}
            onChangeText={onChangePhoneNoHandler}
          />
        </View>
         {/* <View>
          <Text>    Choose your role</Text>
          <View>
            <Text>     farmer</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View> 
        </View>  */}
        <View style={styles.Container}>
          <Text>Create a Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="                        ABCD@1234"
            value={createdUsername}
            onChangeText={onChangeCreatedUsernameHandler}
          />
        </View>
        <View style={styles.Container}>
          <Text>Create a Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="                             XXXXXX"
            value={createdPassword}
            onChangeText={onChangeCreatedPasswordHandler}
          />
        </View>
        {/* <View style={styles.Container}>
          <Text>Re enter the Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="                             XXXXXX"
          />
        </View> */}
        <TouchableOpacity
          style={styles.buttonstyle}>
          <Text style={styles.buttontext} onPress={onSubmitFormHandler}>SIGN UP</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD3B5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    alignItems: "center",
    backgroundColor: "green",
    height: 50,
    width: 270,
    marginBottom: 40,
    justifyContent: "center",
    marginHorizontal: 60,
    marginTop: 15,
    borderRadius: 30,
  },
  buttontext: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  TopEP: {
    margin: 15,
    fontWeight: "bold",
    fontSize: 32,
  },
  Container: {
    flexDirection: "column",
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 7,
    margin: 10,
    borderRadius: 20,
    borderColor: "black",
    alignSelf: "center",
  },
  image: {
    width: 200,
    height: 150,
    margin: 40,
    alignSelf: "center",
    borderRadius: 55,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
