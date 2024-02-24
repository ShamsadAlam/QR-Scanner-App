import React, { useState, useEffect, Button } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { StatusBar } from "react-native";
import OTPVerification from "./OTPVerification";
import { Auth } from "../firebase";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    setOtp("");
  }, [showOTPVerification]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      //   console.log("authUser in login UseEffect:- ", authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleNext = () => {
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      setShowOTPVerification(true);
    } else {
      alert("Invalid mobile number. Please enter a valid 10-digit number.");
    }
  };

  const SendOtp = async () => {
    const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
    setConfirm(confirmation);

    if (otp.length === 6 && /^\d+$/.test(otp)) {
      // Navigate to HomeScreen upon successful OTP verification
      navigation.replace("Home");
    } else {
      // Handle invalid OTP
      alert("Invalid OTP. Please enter a valid 6-digit OTP.");
    }
  };

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber("+1 650-555-3434")}
      />
    );
  }

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  };

  return showOTPVerification ? (
    <OTPVerification
      otp={otp}
      setOtp={setOtp}
      handleOTPVerification={handleOTPVerification}
      navigation={navigation}
    />
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>Enter Mobile Number</Text>
      <TextInput
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
        style={{
          borderWidth: 1,
          width: 250,
          height: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      />
      <Pressable
        style={{
          width: 250,
          height: 40,
          borderWidth: 0.2,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1189d9",
          borderColor: "#fff",
        }}
        onPress={SendOtp}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600" }}>
          Send OTP
        </Text>
      </Pressable>
      <View id="recaptcha-qr-scanner"></View>
      <StatusBar />
    </View>
  );
};

export default LoginScreen;
